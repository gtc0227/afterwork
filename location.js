(function () {
  var RADIUS = 2000;
  var TZ_COUNTRY = {"Europe/Andorra":"ad","Asia/Dubai":"ae","Asia/Kabul":"af","Europe/Tirane":"al","Asia/Yerevan":"am","Antarctica/Casey":"aq","Antarctica/Davis":"aq","Antarctica/Mawson":"aq","Antarctica/Palmer":"aq","Antarctica/Rothera":"aq","Antarctica/Troll":"aq","Antarctica/Vostok":"aq","America/Argentina/Buenos_Aires":"ar","America/Argentina/Cordoba":"ar","America/Argentina/Salta":"ar","America/Argentina/Jujuy":"ar","America/Argentina/Tucuman":"ar","America/Argentina/Catamarca":"ar","America/Argentina/La_Rioja":"ar","America/Argentina/San_Juan":"ar","America/Argentina/Mendoza":"ar","America/Argentina/San_Luis":"ar","America/Argentina/Rio_Gallegos":"ar","America/Argentina/Ushuaia":"ar","Pacific/Pago_Pago":"as","Europe/Vienna":"at","Australia/Lord_Howe":"au","Antarctica/Macquarie":"au","Australia/Hobart":"au","Australia/Melbourne":"au","Australia/Sydney":"au","Australia/Broken_Hill":"au","Australia/Brisbane":"au","Australia/Lindeman":"au","Australia/Adelaide":"au","Australia/Darwin":"au","Australia/Perth":"au","Australia/Eucla":"au","Asia/Baku":"az","America/Barbados":"bb","Asia/Dhaka":"bd","Europe/Brussels":"be","Europe/Sofia":"bg","Atlantic/Bermuda":"bm","America/La_Paz":"bo","America/Noronha":"br","America/Belem":"br","America/Fortaleza":"br","America/Recife":"br","America/Araguaina":"br","America/Maceio":"br","America/Bahia":"br","America/Sao_Paulo":"br","America/Campo_Grande":"br","America/Cuiaba":"br","America/Santarem":"br","America/Porto_Velho":"br","America/Boa_Vista":"br","America/Manaus":"br","America/Eirunepe":"br","America/Rio_Branco":"br","Asia/Thimphu":"bt","Europe/Minsk":"by","America/Belize":"bz","America/St_Johns":"ca","America/Halifax":"ca","America/Glace_Bay":"ca","America/Moncton":"ca","America/Goose_Bay":"ca","America/Toronto":"ca","America/Iqaluit":"ca","America/Winnipeg":"ca","America/Resolute":"ca","America/Rankin_Inlet":"ca","America/Regina":"ca","America/Swift_Current":"ca","America/Edmonton":"ca","America/Cambridge_Bay":"ca","America/Inuvik":"ca","America/Dawson_Creek":"ca","America/Fort_Nelson":"ca","America/Whitehorse":"ca","America/Dawson":"ca","America/Vancouver":"ca","Europe/Zurich":"ch","Africa/Abidjan":"ci","Pacific/Rarotonga":"ck","America/Santiago":"cl","America/Coyhaique":"cl","America/Punta_Arenas":"cl","Pacific/Easter":"cl","Asia/Shanghai":"cn","Asia/Urumqi":"cn","America/Bogota":"co","America/Costa_Rica":"cr","America/Havana":"cu","Atlantic/Cape_Verde":"cv","Asia/Nicosia":"cy","Asia/Famagusta":"cy","Europe/Prague":"cz","Europe/Berlin":"de","America/Santo_Domingo":"do","Africa/Algiers":"dz","America/Guayaquil":"ec","Pacific/Galapagos":"ec","Europe/Tallinn":"ee","Africa/Cairo":"eg","Africa/El_Aaiun":"eh","Europe/Madrid":"es","Africa/Ceuta":"es","Atlantic/Canary":"es","Europe/Helsinki":"fi","Pacific/Fiji":"fj","Atlantic/Stanley":"fk","Pacific/Kosrae":"fm","Atlantic/Faroe":"fo","Europe/Paris":"fr","Europe/London":"gb","Asia/Tbilisi":"ge","America/Cayenne":"gf","Europe/Gibraltar":"gi","America/Nuuk":"gl","America/Danmarkshavn":"gl","America/Scoresbysund":"gl","America/Thule":"gl","Europe/Athens":"gr","Atlantic/South_Georgia":"gs","America/Guatemala":"gt","Pacific/Guam":"gu","Africa/Bissau":"gw","America/Guyana":"gy","Asia/Hong_Kong":"hk","America/Tegucigalpa":"hn","America/Port-au-Prince":"ht","Europe/Budapest":"hu","Asia/Jakarta":"id","Asia/Pontianak":"id","Asia/Makassar":"id","Asia/Jayapura":"id","Europe/Dublin":"ie","Asia/Jerusalem":"il","Asia/Kolkata":"in","Indian/Chagos":"io","Asia/Baghdad":"iq","Asia/Tehran":"ir","Europe/Rome":"it","America/Jamaica":"jm","Asia/Amman":"jo","Asia/Tokyo":"jp","Africa/Nairobi":"ke","Asia/Bishkek":"kg","Pacific/Tarawa":"ki","Pacific/Kanton":"ki","Pacific/Kiritimati":"ki","Asia/Pyongyang":"kp","Asia/Seoul":"kr","Asia/Almaty":"kz","Asia/Qyzylorda":"kz","Asia/Qostanay":"kz","Asia/Aqtobe":"kz","Asia/Aqtau":"kz","Asia/Atyrau":"kz","Asia/Oral":"kz","Asia/Beirut":"lb","Asia/Colombo":"lk","Africa/Monrovia":"lr","Europe/Vilnius":"lt","Europe/Riga":"lv","Africa/Tripoli":"ly","Africa/Casablanca":"ma","Europe/Chisinau":"md","Pacific/Kwajalein":"mh","Asia/Yangon":"mm","Asia/Ulaanbaatar":"mn","Asia/Hovd":"mn","Asia/Macau":"mo","America/Martinique":"mq","Europe/Malta":"mt","Indian/Mauritius":"mu","Indian/Maldives":"mv","America/Mexico_City":"mx","America/Cancun":"mx","America/Merida":"mx","America/Monterrey":"mx","America/Matamoros":"mx","America/Chihuahua":"mx","America/Ciudad_Juarez":"mx","America/Ojinaga":"mx","America/Mazatlan":"mx","America/Bahia_Banderas":"mx","America/Hermosillo":"mx","America/Tijuana":"mx","Asia/Kuching":"my","Africa/Maputo":"mz","Africa/Windhoek":"na","Pacific/Noumea":"nc","Pacific/Norfolk":"nf","Africa/Lagos":"ng","America/Managua":"ni","Asia/Kathmandu":"np","Pacific/Nauru":"nr","Pacific/Niue":"nu","Pacific/Auckland":"nz","Pacific/Chatham":"nz","America/Panama":"pa","America/Lima":"pe","Pacific/Tahiti":"pf","Pacific/Marquesas":"pf","Pacific/Gambier":"pf","Pacific/Port_Moresby":"pg","Pacific/Bougainville":"pg","Asia/Manila":"ph","Asia/Karachi":"pk","Europe/Warsaw":"pl","America/Miquelon":"pm","Pacific/Pitcairn":"pn","America/Puerto_Rico":"pr","Asia/Gaza":"ps","Asia/Hebron":"ps","Europe/Lisbon":"pt","Atlantic/Madeira":"pt","Atlantic/Azores":"pt","Pacific/Palau":"pw","America/Asuncion":"py","Asia/Qatar":"qa","Europe/Bucharest":"ro","Europe/Belgrade":"rs","Europe/Kaliningrad":"ru","Europe/Moscow":"ru","Europe/Simferopol":"ru","Europe/Kirov":"ru","Europe/Volgograd":"ru","Europe/Astrakhan":"ru","Europe/Saratov":"ru","Europe/Ulyanovsk":"ru","Europe/Samara":"ru","Asia/Yekaterinburg":"ru","Asia/Omsk":"ru","Asia/Novosibirsk":"ru","Asia/Barnaul":"ru","Asia/Tomsk":"ru","Asia/Novokuznetsk":"ru","Asia/Krasnoyarsk":"ru","Asia/Irkutsk":"ru","Asia/Chita":"ru","Asia/Yakutsk":"ru","Asia/Khandyga":"ru","Asia/Vladivostok":"ru","Asia/Ust-Nera":"ru","Asia/Magadan":"ru","Asia/Sakhalin":"ru","Asia/Srednekolymsk":"ru","Asia/Kamchatka":"ru","Asia/Anadyr":"ru","Asia/Riyadh":"sa","Pacific/Guadalcanal":"sb","Africa/Khartoum":"sd","Asia/Singapore":"sg","America/Paramaribo":"sr","Africa/Juba":"ss","Africa/Sao_Tome":"st","America/El_Salvador":"sv","Asia/Damascus":"sy","America/Grand_Turk":"tc","Africa/Ndjamena":"td","Asia/Bangkok":"th","Asia/Dushanbe":"tj","Pacific/Fakaofo":"tk","Asia/Dili":"tl","Asia/Ashgabat":"tm","Africa/Tunis":"tn","Pacific/Tongatapu":"to","Europe/Istanbul":"tr","Asia/Taipei":"tw","Europe/Kyiv":"ua","America/New_York":"us","America/Detroit":"us","America/Kentucky/Louisville":"us","America/Kentucky/Monticello":"us","America/Indiana/Indianapolis":"us","America/Indiana/Vincennes":"us","America/Indiana/Winamac":"us","America/Indiana/Marengo":"us","America/Indiana/Petersburg":"us","America/Indiana/Vevay":"us","America/Chicago":"us","America/Indiana/Tell_City":"us","America/Indiana/Knox":"us","America/Menominee":"us","America/North_Dakota/Center":"us","America/North_Dakota/New_Salem":"us","America/North_Dakota/Beulah":"us","America/Denver":"us","America/Boise":"us","America/Phoenix":"us","America/Los_Angeles":"us","America/Anchorage":"us","America/Juneau":"us","America/Sitka":"us","America/Metlakatla":"us","America/Yakutat":"us","America/Nome":"us","America/Adak":"us","Pacific/Honolulu":"us","America/Montevideo":"uy","Asia/Samarkand":"uz","Asia/Tashkent":"uz","America/Caracas":"ve","Asia/Ho_Chi_Minh":"vn","Pacific/Efate":"vu","Pacific/Apia":"ws","Africa/Johannesburg":"za"};

  var SUIT = { solo: 'Solo', friends: 'With friends', both: 'Solo or friends' };

  var CATEGORIES = [
    { key: 'park',    emoji: '\u{1F333}', label: 'Park',          suit: 'both',    overpass: 'node(around:R,LAT,LON)["leisure"="park"]' },
    { key: 'sports',  emoji: '\u{1F3C0}', label: 'Sports centre', suit: 'both',    overpass: 'node(around:R,LAT,LON)["leisure"="sports_centre"]' },
    { key: 'cinema',  emoji: '\u{1F3AC}', label: 'Cinema',        suit: 'both',    overpass: 'node(around:R,LAT,LON)["amenity"="cinema"]' },
    { key: 'bowling', emoji: '\u{1F3B3}', label: 'Bowling',       suit: 'friends', overpass: 'node(around:R,LAT,LON)["leisure"="bowling_alley"]' },
    { key: 'karaoke', emoji: '\u{1F3A4}', label: 'Karaoke',       suit: 'friends', overpass: 'node(around:R,LAT,LON)["amenity"="karaoke_box"]' },
    { key: 'cafe',    emoji: '\u2615',     label: 'Cafe',          suit: 'both',    overpass: 'node(around:R,LAT,LON)["amenity"="cafe"]' },
    { key: 'market',  emoji: '\u{1F3EA}', label: 'Market',        suit: 'both',    overpass: 'node(around:R,LAT,LON)["amenity"="marketplace"]' },
    { key: 'pool',    emoji: '\u{1F3CA}', label: 'Swimming pool', suit: 'both',    overpass: 'node(around:R,LAT,LON)["leisure"="swimming_pool"]' }
  ];

  var WEATHER = [
    [[0], '\u2600 Clear'], [[1, 2], '\u26C5 Partly cloudy'], [[3], '\u2601 Overcast'],
    [[45, 48], '\u{1F32B} Foggy'], [[51, 53, 55, 56, 57], '\u{1F327} Drizzle'],
    [[61, 63, 65, 66, 67], '\u{1F327} Rain'], [[71, 73, 75, 77], '\u{1F328} Snow'],
    [[80, 81, 82], '\u{1F327} Showers'], [[95, 96, 99], '\u26C8 Thunderstorm']
  ];

  // Two attempts per lookup, then the visitor decides to retry - bounded, no mirror-chasing.
  var OVERPASS_MIRRORS = [
    'https://overpass-api.de/api/interpreter?data=',
    'https://overpass.openstreetmap.fr/api/interpreter?data='
  ];

  var lastCountryCode = null;
  var lastRequest = null;
  var lastPicked = null, lastLabel = '', lastWeather = null, filter = 'all';

  var els = {
    card: document.getElementById('nearby'),
    ask: document.getElementById('nb-ask'),
    status: document.getElementById('nb-status'),
    results: document.getElementById('nb-results'),
    locateBtn: document.getElementById('nb-locate'),
    areaInput: document.getElementById('nb-area'),
    areaBtn: document.getElementById('nb-area-btn'),
    resetBtn: document.getElementById('nb-reset'),
    retryBtn: document.getElementById('nb-retry')
  };

  function fetchJson(url, ms) {
    var ctrl = new AbortController();
    var t = setTimeout(function () { ctrl.abort(); }, ms || 12000);
    return fetch(url, { signal: ctrl.signal })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .finally(function () { clearTimeout(t); });
  }

  function showStatus(msg, isError) {
    els.status.textContent = msg || '';
    els.status.className = 'nb-status' + (isError ? ' nb-error' : '');
    els.status.style.display = msg ? 'block' : 'none';
    if (!isError) els.retryBtn.style.display = 'none';
  }

  function showError(msg) {
    showStatus(msg, true);
    els.retryBtn.style.display = lastRequest ? 'inline-block' : 'none';
    setBusy(false);
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
    if (m < 100) return 'under 100 m';
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

  // Skip disused, former and otherwise non-participatory features.
  var DEAD_NAME = /\b(former|disused|abandoned|defunct|demolished|preserved|historic|ruins?|old site)\b/i;
  function usableSpot(el) {
    var t = el.tags || {};
    if (!t.name || DEAD_NAME.test(t.name)) return false;
    for (var k in t) {
      if (k.indexOf('disused:') === 0 || k.indexOf('abandoned:') === 0) return false;
    }
    if (t.disused === 'yes' || t.abandoned === 'yes' || t.historic) return false;
    return true;
  }

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

  function loadNearby(lat, lon, placeLabel) {
    var query = '[out:json][timeout:12];(' + CATEGORIES.map(function (c) {
      return c.overpass.replace('R', RADIUS).replace('LAT', lat).replace('LON', lon);
    }).join(';') + ';);out body 80;';
    var overpassUrls = OVERPASS_MIRRORS.map(function (base) { return base + encodeURIComponent(query); });
    var weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon +
      '&current=temperature_2m,weather_code&timezone=auto';

    var spotsP = overpassUrls.reduce(function (chain, url) {
      return chain.catch(function () { return fetchJson(url, 12000); });
    }, Promise.reject());
    var weatherP = fetchJson(weatherUrl, 8000).catch(function () { return null; });

    Promise.all([spotsP, weatherP]).then(function (res) {
      var data = res[0], weather = res[1];
      var named = (data.elements || []).filter(usableSpot);
      named.forEach(function (el) { el.dist = haversine(lat, lon, el.lat, el.lon); });
      named.sort(function (a, b) { return a.dist - b.dist; });

      var perCat = {}, picked = [];
      for (var i = 0; i < named.length && picked.length < 9; i++) {
        var c = catOf(named[i]);
        if (!c) continue;
        perCat[c.key] = perCat[c.key] || 0;
        if (perCat[c.key] >= 2) continue;
        perCat[c.key]++;
        picked.push({ cat: c, el: named[i] });
      }

      showStatus('');
      lastPicked = picked; lastLabel = placeLabel; lastWeather = weather; filter = 'all';
      render();
    }).catch(function () {
      showError('Could not load nearby spots right now. The places service may be busy.');
    });
  }

  function render() {
    var picked = lastPicked, placeLabel = lastLabel, weather = lastWeather;
    var shown = picked.filter(function (p) {
      return filter === 'all' || p.cat.suit === 'both' || p.cat.suit === filter;
    });
    var html = '<div class="nb-head">Spots near <b>' + escapeHtml(placeLabel) + '</b>';
    if (weather && weather.current) {
      html += '<span class="nb-weather">' + weatherText(weather.current.weather_code, weather.current.temperature_2m) + '</span>';
    }
    html += '</div>';
    html += '<div class="nb-chips">' + ['all', 'solo', 'friends'].map(function (f) {
      var txt = f === 'all' ? 'All' : (f === 'solo' ? 'Solo' : 'With friends');
      return '<button type="button" class="nb-chip' + (filter === f ? ' nb-chip-on' : '') + '" data-filter="' + f + '">' + txt + '</button>';
    }).join('') + '</div>';
    if (!shown.length) {
      html += '<p class="nb-empty">' + (picked.length ? 'No ' + (filter === 'solo' ? 'solo' : 'group') + ' spots in this list. Try the other filters.' :
        'No named spots found within 2 km. Try a nearby town or a bigger area name.') + '</p>';
    } else {
      html += '<ul class="nb-list">' + shown.map(function (p) {
        var mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + p.el.lat + ',' + p.el.lon;
        return '<li><span class="emoji">' + p.cat.emoji + '</span>' +
          '<div class="nb-spot"><span class="idea-name">' + escapeHtml(p.el.tags.name) + '</span>' +
          '<div class="idea-detail">' + p.cat.label + ' \u00B7 ' + fmtDist(p.el.dist) + ' away \u00B7 <span class="nb-tag">' + SUIT[p.cat.suit] + '</span></div></div>' +
          '<a class="nb-map" href="' + mapUrl + '" target="_blank" rel="noopener">Map</a></li>';
      }).join('') + '</ul>';
      html += '<p class="nb-credit">Places from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors. Opening hours are not shown, so check a spot is open this evening before you go.</p>';
    }
    els.results.innerHTML = html;
    els.results.style.display = 'block';
    els.ask.style.display = 'none';
    els.resetBtn.style.display = 'inline-block';
    setBusy(false);
    var chips = els.results.querySelectorAll('.nb-chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function () { filter = this.getAttribute('data-filter'); render(); });
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  // Timezone country: a hint for ordering only, never silent proof of the intended country.
  function timezoneCountryCode() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return (tz && TZ_COUNTRY[tz]) || null;
    } catch (e) { return null; }
  }

  function candidateLabel(r) {
    var parts = String(r.display_name || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var name = parts[0] || '';
    var country = (r.address && r.address.country) || (parts.length > 1 ? parts[parts.length - 1] : '');
    var region = parts.length > 2 ? parts[1] : '';
    var label = name;
    if (region && region !== name && region !== country) label += ', ' + region;
    if (country && country !== name) label += ', ' + country;
    return label;
  }

  function chooseCandidate(q, list) {
    var seen = {};
    list = list.filter(function (r) {
      var l = candidateLabel(r);
      if (seen[l]) return false;
      seen[l] = true;
      return true;
    });
    if (list.length === 1) { proceedWithCandidate(list[0]); return; }
    setBusy(false);
    showStatus('');
    var html = '<p class="nb-empty">Which ' + escapeHtml(q) + ' did you mean?</p><div class="nb-choose">' +
      list.map(function (r, i) {
        return '<button type="button" class="nb-btn nb-choice" data-i="' + i + '">' + escapeHtml(candidateLabel(r)) + '</button>';
      }).join('') + '</div>';
    els.results.innerHTML = html;
    els.results.style.display = 'block';
    var btns = els.results.querySelectorAll('.nb-choice');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var r = list[parseInt(this.getAttribute('data-i'), 10)];
        proceedWithCandidate(r);
      });
    }
  }

  function proceedWithCandidate(r) {
    var lat = parseFloat(r.lat), lon = parseFloat(r.lon);
    var a = r.address || {};
    var label = String(r.display_name || '').split(',')[0].trim();
    if (a.country && label.toLowerCase().indexOf(a.country.toLowerCase()) === -1) label += ', ' + a.country;
    showStatus('Finding spots near ' + label + '\u2026');
    setBusy(true);
    loadNearby(lat, lon, label);
  }

  function useGeolocation() {
    if (!navigator.geolocation) {
      showError('This browser does not support location. Type a postal code or area instead.');
      return;
    }
    setBusy(true);
    showStatus('Asking for your location\u2026');
    lastRequest = useGeolocation;
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = pos.coords.latitude, lon = pos.coords.longitude;
      showStatus('Finding spots near you\u2026');
      fetchJson('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon + '&zoom=14', 8000)
        .then(function (geo) {
          if (geo && geo.address && geo.address.country_code) lastCountryCode = geo.address.country_code;
          var label = areaName(geo && geo.address, 'your area');
          loadNearby(lat, lon, label);
        })
        .catch(function () { loadNearby(lat, lon, 'your area'); });
    }, function (err) {
      lastRequest = null;
      setBusy(false);
      if (err.code === 1) {
        showStatus('Location permission was declined. You can type a postal code or area instead.', true);
      } else {
        showStatus('Could not get your location. Try typing a postal code or area instead.', true);
      }
    }, { timeout: 12000, maximumAge: 300000 });
  }

  function useArea(text) {
    var q = (text || '').trim();
    if (!q) { showStatus('Type a postal code, area or town first.', true); return; }
    setBusy(true);
    showStatus('Looking up ' + q + '\u2026');
    lastRequest = function () { useArea(q); };
    fetchJson('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&addressdetails=1&q=' + encodeURIComponent(q), 8000)
      .then(function (res) {
        if (!res || !res.length) {
          showError('Could not find that place. Try a nearby town, a full postcode or a different spelling.');
          return;
        }
        if (lastCountryCode) {
          // Country proven by actual geolocation: a same-country match settles it.
          var inCountry = res.filter(function (r) { return r.address && r.address.country_code === lastCountryCode; });
          if (inCountry.length) proceedWithCandidate(inCountry[0]);
          else chooseCandidate(q, res.slice(0, 4));
        } else {
          // Timezone only orders the options; far-apart matches always ask.
          var tz = timezoneCountryCode();
          var ordered = tz ? res.slice().sort(function (a, b) {
            var am = a.address && a.address.country_code === tz ? 1 : 0;
            var bm = b.address && b.address.country_code === tz ? 1 : 0;
            return bm - am;
          }) : res;
          var lat0 = parseFloat(ordered[0].lat), lon0 = parseFloat(ordered[0].lon);
          var ambiguous = ordered.slice(1).some(function (r) {
            return haversine(lat0, lon0, parseFloat(r.lat), parseFloat(r.lon)) > 25000;
          });
          if (ambiguous) chooseCandidate(q, ordered.slice(0, 4));
          else proceedWithCandidate(ordered[0]);
        }
      })
      .catch(function () {
        showError('Place search failed. Check your connection and try again.');
      });
  }

  els.locateBtn.addEventListener('click', useGeolocation);
  els.areaBtn.addEventListener('click', function () { useArea(els.areaInput.value); });
  els.areaInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') useArea(els.areaInput.value); });
  els.retryBtn.addEventListener('click', function () { if (lastRequest) lastRequest(); });
  els.resetBtn.addEventListener('click', function () {
    els.results.style.display = 'none';
    els.results.innerHTML = '';
    els.ask.style.display = 'block';
    els.resetBtn.style.display = 'none';
    els.retryBtn.style.display = 'none';
    showStatus('');
  });

  // Default to the visitor's current location when they have already granted permission.
  var m = location.search.match(/[?&]area=([^&]+)/);
  if (m) {
    useArea(decodeURIComponent(m[1].replace(/\+/g, ' ')));
  } else if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions.query({ name: 'geolocation' }).then(function (p) {
      if (p.state === 'granted') useGeolocation();
    }).catch(function () {});
  }
})();
