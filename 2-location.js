(function () {
  var RADIUS = 2000;

  var CATEGORIES = [
    { key: 'park',           emoji: '\u{1F333}', label: 'Park',          overpass: 'node(around:R,LAT,LON)["leisure"="park"]' },
    { key: 'sports',         emoji: '\u{1F3C0}', label: 'Sports centre', overpass: 'node(around:R,LAT,LON)["leisure"="sports_centre"]' },
    { key: 'cinema',         emoji: '\u{1F3AC}', label: 'Cinema',        overpass: 'node(around:R,LAT,LON)["amenity"="cinema"]' },
    { key: 'bowling',        emoji: '\u{1F3B3}', label: 'Bowling',       overpass: 'node(around:R,LAT,LON)["leisure"="bowling_alley"]' },
    { key: 'karaoke',        emoji: '\u{1F3A4}', label: 'Karaoke',       overpass: 'node(around:R,LAT,LON)["amenity"="karaoke_box"]' },
    { key: 'cafe',           emoji: '\u2615',     label: 'Cafe',          overpass: 'node(around:R,LAT,LON)["amenity"="cafe"]' },
    { key: 'market',         emoji: '\u{1F3EA}', label: 'Market',        overpass: 'node(around:R,LAT,LON)["amenity"="marketplace"]' },
    { key: 'pool',           emoji: '\u{1F3CA}', label: 'Swimming pool', overpass: 'node(around:R,LAT,LON)["leisure"="swimming_pool"]' }
  ];

  var WEATHER = [
    [[0], '\u2600 Clear'], [[1, 2], '\u26C5 Partly cloudy'], [[3], '\u2601 Overcast'],
    [[45, 48], '\u{1F32B} Foggy'], [[51, 53, 55, 56, 57], '\u{1F327} Drizzle'],
    [[61, 63, 65, 66, 67], '\u{1F327} Rain'], [[71, 73, 75, 77], '\u{1F328} Snow'],
    [[80, 81, 82], '\u{1F327} Showers'], [[95, 96, 99], '\u26C8 Thunderstorm']
  ];

  var els = {
    card: document.getElementById('nearby'),
    ask: document.getElementById('nb-ask'),
    status: document.getElementById('nb-status'),
    results: document.getElementById('nb-results'),
    locateBtn: document.getElementById('nb-locate'),
    areaInput: document.getElementById('nb-area'),
    areaBtn: document.getElementById('nb-area-btn'),
    resetBtn: document.getElementById('nb-reset')
  };

  function fetchJson(url, ms) {
    var ctrl = new AbortController();
    var t = setTimeout(function () { ctrl.abort(); }, ms || 15000);
    return fetch(url, { signal: ctrl.signal })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .finally(function () { clearTimeout(t); });
  }

  function showStatus(msg, isError) {
    els.status.textContent = msg || '';
    els.status.className = 'nb-status' + (isError ? ' nb-error' : '');
    els.status.style.display = msg ? 'block' : 'none';
  }

  function setBusy(b) {
    els.locateBtn.disabled = b;
    els.areaBtn.disabled = b;
  }

  function haversine(lat1, lon1, lat2, lon2) {
    var rad = Math.PI / 180, R = 6371000;
    var dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  function fmtDist(m) {
    return m < 1000 ? Math.round(m / 50) * 50 + ' m' : (m / 1000).toFixed(1) + ' km';
  }

  function weatherText(code, temp) {
    for (var i = 0; i < WEATHER.length; i++) {
      if (WEATHER[i][0].indexOf(code) !== -1) return WEATHER[i][1] + ', ' + Math.round(temp) + '\u00B0C';
    }
    return Math.round(temp) + '\u00B0C';
  }

  function areaName(addr, fallback) {
    if (!addr) return fallback;
    return addr.suburb || addr.neighbourhood || addr.residential || addr.village ||
      addr.town || addr.city_district || addr.city || fallback;
  }

  function loadNearby(lat, lon, placeLabel) {
    var query = '[out:json][timeout:25];(' + CATEGORIES.map(function (c) {
      return c.overpass.replace('R', RADIUS).replace('LAT', lat).replace('LON', lon);
    }).join(';') + ';);out body 80;';
    var overpassUrls = [
      'https://overpass-api.de/api/interpreter?data=',
      'https://overpass.private.coffee/api/interpreter?data=',
      'https://overpass.kumi.systems/api/interpreter?data='
    ].map(function (base) { return base + encodeURIComponent(query); });
    var weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon +
      '&current=temperature_2m,weather_code&timezone=auto';

    var spotsP = overpassUrls.reduce(function (chain, url) {
      return chain.catch(function () { return fetchJson(url, 30000); });
    }, Promise.reject());
    var weatherP = fetchJson(weatherUrl, 10000).catch(function () { return null; });

    Promise.all([spotsP, weatherP]).then(function (res) {
      var data = res[0], weather = res[1];
      var named = (data.elements || []).filter(function (el) { return el.tags && el.tags.name; });
      named.forEach(function (el) { el.dist = haversine(lat, lon, el.lat, el.lon); });
      named.sort(function (a, b) { return a.dist - b.dist; });

      function catOf(el) {
        var t = el.tags;
        for (var i = 0; i < CATEGORIES.length; i++) {
          var c = CATEGORIES[i];
          if ((t.leisure === 'park' && c.key === 'park') ||
              (t.leisure === 'sports_centre' && c.key === 'sports') ||
              (t.amenity === 'cinema' && c.key === 'cinema') ||
              (t.leisure === 'bowling_alley' && c.key === 'bowling') ||
              (t.amenity === 'karaoke_box' && c.key === 'karaoke') ||
              (t.amenity === 'cafe' && c.key === 'cafe') ||
              (t.amenity === 'marketplace' && c.key === 'market') ||
              (t.leisure === 'swimming_pool' && c.key === 'pool')) return c;
        }
        return null;
      }

      var perCat = {}, picked = [];
      for (var i = 0; i < named.length && picked.length < 8; i++) {
        var c = catOf(named[i]);
        if (!c) continue;
        perCat[c.key] = perCat[c.key] || 0;
        if (perCat[c.key] >= 2) continue;
        perCat[c.key]++;
        picked.push({ cat: c, el: named[i] });
      }

      showStatus('');
      render(placeLabel, picked, weather);
    }).catch(function () {
      showStatus('Could not load nearby spots right now. Check your connection and try again.', true);
      setBusy(false);
    });
  }

  function render(placeLabel, picked, weather) {
    var html = '<div class="nb-head">Evening ideas near <b>' + escapeHtml(placeLabel) + '</b>';
    if (weather && weather.current) {
      html += '<span class="nb-weather">' + weatherText(weather.current.weather_code, weather.current.temperature_2m) + '</span>';
    }
    html += '</div>';
    if (!picked.length) {
      html += '<p class="nb-empty">No named spots found within 2 km. Try a nearby town or a bigger area name.</p>';
    } else {
      html += '<ul class="nb-list">' + picked.map(function (p) {
        var mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + p.el.lat + ',' + p.el.lon;
        return '<li><span class="emoji">' + p.cat.emoji + '</span>' +
          '<div class="nb-spot"><span class="idea-name">' + escapeHtml(p.el.tags.name) + '</span>' +
          '<div class="idea-detail">' + p.cat.label + ' \u00B7 ' + fmtDist(p.el.dist) + ' away</div></div>' +
          '<a class="nb-map" href="' + mapUrl + '" target="_blank" rel="noopener">Map</a></li>';
      }).join('') + '</ul>';
      html += '<p class="nb-credit">Places from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors. Opening hours are not shown, so check a spot is open before you go.</p>';
    }
    els.results.innerHTML = html;
    els.results.style.display = 'block';
    els.ask.style.display = 'none';
    els.resetBtn.style.display = 'inline-block';
    setBusy(false);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function useGeolocation() {
    if (!navigator.geolocation) {
      showStatus('This browser does not support location. Type your area instead.', true);
      return;
    }
    setBusy(true);
    showStatus('Asking for your location\u2026');
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = pos.coords.latitude, lon = pos.coords.longitude;
      showStatus('Finding spots near you\u2026');
      fetchJson('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon + '&zoom=14', 10000)
        .then(function (geo) {
          var label = areaName(geo && geo.address, 'your area');
          loadNearby(lat, lon, label);
        })
        .catch(function () { loadNearby(lat, lon, 'your area'); });
    }, function (err) {
      setBusy(false);
      if (err.code === 1) {
        showStatus('Location permission was declined. You can type your area instead.', true);
      } else {
        showStatus('Could not get your location. Try typing your area instead.', true);
      }
    }, { timeout: 15000, maximumAge: 300000 });
  }

  function useArea(text) {
    var q = (text || '').trim();
    if (!q) { showStatus('Type an area, town or postcode first.', true); return; }
    setBusy(true);
    showStatus('Looking up ' + q + '\u2026');
    fetchJson('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=' + encodeURIComponent(q), 10000)
      .then(function (res) {
        if (!res || !res.length) {
          showStatus('Could not find that place. Try a nearby town or a different spelling.', true);
          setBusy(false);
          return;
        }
        var lat = parseFloat(res[0].lat), lon = parseFloat(res[0].lon);
        var label = String(res[0].display_name || q).split(',')[0];
        showStatus('Finding spots near ' + label + '\u2026');
        loadNearby(lat, lon, label);
      })
      .catch(function () {
        showStatus('Place search failed. Check your connection and try again.', true);
        setBusy(false);
      });
  }

  els.locateBtn.addEventListener('click', useGeolocation);
  els.areaBtn.addEventListener('click', function () { useArea(els.areaInput.value); });
  els.areaInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') useArea(els.areaInput.value); });
  els.resetBtn.addEventListener('click', function () {
    els.results.style.display = 'none';
    els.results.innerHTML = '';
    els.ask.style.display = 'block';
    els.resetBtn.style.display = 'none';
    showStatus('');
  });

  // Test hook: ?area=... runs the manual flow automatically.
  var m = location.search.match(/[?&]area=([^&]+)/);
  if (m) useArea(decodeURIComponent(m[1].replace(/\+/g, ' ')));
})();
