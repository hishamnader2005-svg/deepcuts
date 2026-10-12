(function () {
  'use strict';

  /* =====================================================
     TIERS
     ===================================================== */
  var TIERS = {
    0: { name: 'Not in the crate', pts: 0, cls: 'miss', emoji: '⬛' },
    1: { name: 'Chart-topper', pts: 10, cls: 't1', emoji: '⬜' },
    2: { name: 'Fan favorite', pts: 30, cls: 't2', emoji: '🟦' },
    3: { name: 'Deep cut', pts: 60, cls: 't3', emoji: '🟪' },
    4: { name: 'One in a million', pts: 100, cls: 't4', emoji: '🟩' }
  };

  var ROUND_SECONDS = 25;
  var ROUNDS = 7;

  /* =====================================================
     SONG LIBRARY
     Entry format:  "Title — Artist|alias|alias"
     ===================================================== */
  var PROMPTS = [
    {
      icon: '🎨',
      text: 'Name a song with a <b>color</b> in the title',
      tiers: {
        1: ["Purple Rain — Prince", "Yellow — Coldplay", "Back in Black — AC/DC", "Paint It Black — The Rolling Stones|Paint It, Black", "Blue (Da Ba Dee) — Eiffel 65|Blue|Da Ba Dee"],
        2: ["Yellow Submarine — The Beatles", "Lady in Red — Chris de Burgh", "Blue Suede Shoes — Elvis Presley", "Black Hole Sun — Soundgarden", "Red Red Wine — UB40", "Blue Monday — New Order", "White Wedding — Billy Idol", "Green Onions — Booker T. & the M.G.'s", "Black or White — Michael Jackson", "Pink — Aerosmith", "Red — Taylor Swift", "Brown Eyed Girl — Van Morrison"],
        3: ["Pink Houses — John Mellencamp", "Crimson and Clover — Tommy James and the Shondells", "Black Betty — Ram Jam", "Green Light — Lorde", "Orange Crush — R.E.M.", "Black Magic Woman — Santana", "Black Dog — Led Zeppelin", "Blue Jeans — Lana Del Rey", "Pink Pony Club — Chappell Roan", "Red Rain — Peter Gabriel"],
        4: ["Violet Hill — Coldplay", "Pink Moon — Nick Drake", "Blue Orchid — The White Stripes", "Scarlet Begonias — Grateful Dead", "Yellow Ledbetter — Pearl Jam", "Green Grass and High Tides — The Outlaws", "Orange Sky — Alexi Murdoch", "Indigo Night — Tamino", "Lilac Wine — Nina Simone"]
      }
    },
    {
      icon: '🌍',
      text: 'Name a song with a <b>city, state or country</b> in the title',
      tiers: {
        1: ["Africa — Toto", "Hotel California — Eagles", "Sweet Home Alabama — Lynyrd Skynyrd", "Empire State of Mind — Jay-Z & Alicia Keys", "New York, New York — Frank Sinatra|New York|Theme from New York, New York", "Viva Las Vegas — Elvis Presley", "California Gurls — Katy Perry"],
        2: ["Vienna — Billy Joel", "Kokomo — The Beach Boys", "London Calling — The Clash", "Born in the U.S.A. — Bruce Springsteen|Born in the USA", "Tokyo Drift — Teriyaki Boyz", "Paris — The Chainsmokers", "Rio — Duran Duran", "Galway Girl — Ed Sheeran", "Texas Hold 'Em — Beyoncé|Texas Hold Em"],
        3: ["Detroit Rock City — Kiss", "Streets of Philadelphia — Bruce Springsteen", "Barcelona — Freddie Mercury & Montserrat Caballé", "Marrakesh Express — Crosby, Stills & Nash", "Istanbul (Not Constantinople) — They Might Be Giants|Istanbul", "Wichita Lineman — Glen Campbell", "Amsterdam — Coldplay", "Dakota — Stereophonics", "Jackson — Johnny Cash & June Carter"],
        4: ["Kyoto — Phoebe Bridgers", "Chicago — Sufjan Stevens", "Kingston Town — UB40", "Tallahassee — The Mountain Goats", "Cleveland Rocks — Ian Hunter", "Mykonos — Fleet Foxes", "Baltimore — Nina Simone"]
      }
    },
    {
      icon: '🔢',
      text: 'Name a song with a <b>number</b> in the title',
      tiers: {
        1: ["Seven Nation Army — The White Stripes|7 Nation Army", "9 to 5 — Dolly Parton|Nine to Five", "Eight Days a Week — The Beatles|8 Days a Week", "Mambo No. 5 — Lou Bega|Mambo Number 5", "Three Little Birds — Bob Marley", "1999 — Prince|Nineteen Ninety Nine"],
        2: ["99 Red Balloons — Nena|Ninety Nine Red Balloons", "99 Problems — Jay-Z", "867-5309/Jenny — Tommy Tutone|Jenny|867 5309", "21 Guns — Green Day", "One Week — Barenaked Ladies", "One — U2"],
        3: ["Take Five — Dave Brubeck", "Five Years — David Bowie", "Sixteen Tons — Tennessee Ernie Ford", "19 — Paul Hardcastle|Nineteen", "Ten Years Gone — Led Zeppelin", "212 — Azealia Banks", "Three Lions — Baddiel & Skinner & The Lightning Seeds", "Two Out of Three Ain't Bad — Meat Loaf", "Fifty Ways to Leave Your Lover — Paul Simon", "Two Princes — Spin Doctors", "FourFiveSeconds — Rihanna, Kanye West & Paul McCartney|Four Five Seconds"],
        4: ["Two Weeks — Grizzly Bear", "Four Seasons in One Day — Crowded House", "Thirteen — Big Star", "Seven Seas of Rhye — Queen", "Twenty Flight Rock — Eddie Cochran", "Six Underground — Sneaker Pimps", "46 & 2 — Tool|Forty Six and 2", "Three Marlenas — The Wallflowers"]
      }
    },
    {
      icon: '🐾',
      text: 'Name a song with an <b>animal</b> in the title',
      tiers: {
        1: ["Eye of the Tiger — Survivor", "Hungry Like the Wolf — Duran Duran", "Blackbird — The Beatles", "Hound Dog — Elvis Presley", "The Lion Sleeps Tonight — The Tokens|Lion Sleeps Tonight", "Bat Out of Hell — Meat Loaf", "When Doves Cry — Prince", "Free Bird — Lynyrd Skynyrd|Freebird"],
        2: ["Crocodile Rock — Elton John", "Dog Days Are Over — Florence + The Machine", "Rockin' Robin — Bobby Day|Rocking Robin", "I Am the Walrus — The Beatles", "Cat's in the Cradle — Harry Chapin", "Wild Horses — The Rolling Stones", "Octopus's Garden — The Beatles", "Mockingbird — Eminem", "Butterfly — Crazy Town", "Bulls on Parade — Rage Against the Machine"],
        3: ["Black Horse and the Cherry Tree — KT Tunstall", "Fox on the Run — Sweet", "Wolf Like Me — TV on the Radio", "Kiwi — Harry Styles", "Surfin' Bird — The Trashmen|Surfing Bird", "Monkey Wrench — Foo Fighters", "Gorilla — Bruno Mars"],
        4: ["Elephant Gun — Beirut", "Pigs (Three Different Ones) — Pink Floyd|Pigs", "Eagle — ABBA|The Eagle", "Zebra — Beach House", "Rhinoceros — The Smashing Pumpkins", "Beetlebum — Blur"]
      }
    },
    {
      icon: '☘️',
      text: 'Name a song by an <b>Irish artist</b>',
      tiers: {
        1: ["With or Without You — U2", "Zombie — The Cranberries", "Nothing Compares 2 U — Sinéad O'Connor|Nothing Compares to You", "Take Me to Church — Hozier", "Beautiful Day — U2", "Where the Streets Have No Name — U2", "Orinoco Flow — Enya|Sail Away"],
        2: ["Dreams — The Cranberries", "Linger — The Cranberries", "Sunday Bloody Sunday — U2", "Fairytale of New York — The Pogues", "Whiskey in the Jar — Thin Lizzy", "The Boys Are Back in Town — Thin Lizzy|Boys Are Back in Town", "All I Want — Kodaline", "Breakeven — The Script", "Only Time — Enya", "Mysterious Ways — U2", "Outnumbered — Dermot Kennedy", "The Fields of Athenry — Paddy Reilly|Fields of Athenry"],
        3: ["Work Song — Hozier", "Movement — Hozier", "Bad — U2", "Stuck in a Moment You Can't Get Out Of — U2", "Boys in the Better Land — Fontaines D.C.", "Jailbreak — Thin Lizzy", "Don't Go — Hothouse Flowers", "Ode to My Family — The Cranberries", "Giants — Dermot Kennedy", "Nervous — Gavin James", "Raglan Road — The Dubliners", "Theme from Harry's Game — Clannad|Harry's Game"],
        4: ["Starburster — Fontaines D.C.", "I Love You — Fontaines D.C.", "Jackie Down the Line — Fontaines D.C.", "Nothing Arrived — Villagers", "Ridiculous Thoughts — The Cranberries", "Salvation — The Cranberries", "Zooropa — U2", "Acrobat — U2"]
      }
    },
    {
      icon: '🫀',
      text: 'Name a song with a <b>body part</b> in the title',
      tiers: {
        1: ["Total Eclipse of the Heart — Bonnie Tyler", "Heart of Glass — Blondie", "Hips Don't Lie — Shakira", "Brown Eyed Girl — Van Morrison"],
        2: ["Achy Breaky Heart — Billy Ray Cyrus", "Head Over Heels — Tears for Fears", "Hand in My Pocket — Alanis Morissette", "Lips of an Angel — Hinder", "Heart-Shaped Box — Nirvana", "Eyes Without a Face — Billy Idol", "Heart Attack — Demi Lovato"],
        3: ["Hands Down — Dashboard Confessional", "Cold Shoulder — Adele", "Hair — Lady Gaga", "Skin — Rihanna", "Teeth — 5 Seconds of Summer", "Ribs — Lorde", "Brain Stew — Green Day", "Toes — Zac Brown Band", "Face Down — The Red Jumpsuit Apparatus", "Tongue Tied — Grouplove", "Fingertips — Stevie Wonder"],
        4: ["Big Mouth Strikes Again — The Smiths", "Hands Clean — Alanis Morissette", "Cheek to Cheek — Fred Astaire", "Bones — The Killers"]
      }
    },
    {
      icon: '📅',
      text: 'Name a song with a <b>day or month</b> in the title',
      tiers: {
        1: ["Friday I'm in Love — The Cure", "Manic Monday — The Bangles", "I Don't Like Mondays — The Boomtown Rats", "September — Earth, Wind & Fire", "Wake Me Up When September Ends — Green Day"],
        2: ["Ruby Tuesday — The Rolling Stones", "Sunday Bloody Sunday — U2", "Friday — Rebecca Black", "Blue Monday — New Order", "Sunday Morning — Maroon 5"],
        3: ["Monday, Monday — The Mamas & the Papas", "Saturday in the Park — Chicago", "Saturday Night — Whigfield", "December, 1963 (Oh, What a Night) — The Four Seasons|December 1963", "Thursday — The Weeknd", "Friday on My Mind — The Easybeats", "Tuesday's Gone — Lynyrd Skynyrd", "Sunday Girl — Blondie", "Rainy Days and Mondays — Carpenters"],
        4: ["April Come She Will — Simon & Garfunkel", "Black Friday — Steely Dan", "Wednesday Week — The Undertones", "Thursday's Child — David Bowie", "Come Monday — Jimmy Buffett", "Wednesday Morning, 3 A.M. — Simon & Garfunkel|Wednesday Morning 3 AM"]
      }
    },
    {
      icon: '🍒',
      text: 'Name a song with a <b>food or drink</b> in the title',
      tiers: {
        1: ["Strawberry Fields Forever — The Beatles", "Brown Sugar — The Rolling Stones", "Milkshake — Kelis", "Escape (The Piña Colada Song) — Rupert Holmes|Piña Colada Song|Escape", "Champagne Supernova — Oasis", "Lady Marmalade — Labelle", "Pour Some Sugar on Me — Def Leppard"],
        2: ["Cherry Pie — Warrant", "Peaches — The Presidents of the United States of America", "Candy Shop — 50 Cent", "Gin and Juice — Snoop Dogg", "Cake by the Ocean — DNCE", "Banana Pancakes — Jack Johnson", "Blueberry Hill — Fats Domino", "Raspberry Beret — Prince", "Sugar — Maroon 5", "Brandy (You're a Fine Girl) — Looking Glass|Brandy", "Cheeseburger in Paradise — Jimmy Buffett", "Butter — BTS", "Tequila — The Champs", "Sugar, Sugar — The Archies"],
        3: ["Strawberry Swing — Coldplay", "Tangerine — Led Zeppelin", "Coconut — Harry Nilsson", "Rum and Coca-Cola — The Andrews Sisters", "Whisky Lullaby — Brad Paisley & Alison Krauss", "Black Coffee — Peggy Lee", "Cherry Bomb — The Runaways", "Peanut Butter Jelly Time — Buckwheat Boyz", "Chocolate — The 1975", "Coffee & TV — Blur", "Cinnamon Girl — Neil Young"],
        4: ["Wine Red — The Hush Sound", "Apple Scruffs — George Harrison", "Mashed Potato Time — Dee Dee Sharp", "Cheese and Onions — The Rutles", "Egg Man — Beastie Boys"]
      }
    },
    {
      icon: '⛈️',
      text: 'Name a song with a <b>weather</b> word in the title',
      tiers: {
        1: ["Riders on the Storm — The Doors", "Here Comes the Sun — The Beatles", "Singin' in the Rain — Gene Kelly|Singing in the Rain", "Set Fire to the Rain — Adele", "Thunderstruck — AC/DC", "Walking on Sunshine — Katrina & the Waves", "Mr. Blue Sky — Electric Light Orchestra|Mister Blue Sky", "Thunder — Imagine Dragons", "November Rain — Guns N' Roses", "Wind of Change — Scorpions", "Raindrops Keep Fallin' on My Head — B.J. Thomas"],
        2: ["Snow (Hey Oh) — Red Hot Chili Peppers|Snow|Hey Oh", "Hurricane — Bob Dylan", "Lightning Crashes — Live", "Heat Wave — Martha and the Vandellas", "Let It Snow! Let It Snow! Let It Snow! — Dean Martin|Let It Snow", "Fire and Rain — James Taylor", "Sunny Afternoon — The Kinks", "Blame It on the Rain — Milli Vanilli", "Rain on Me — Lady Gaga & Ariana Grande", "Heat Waves — Glass Animals", "Thunder Road — Bruce Springsteen"],
        3: ["Stormy Weather — Lena Horne", "Cloudbusting — Kate Bush", "Windy — The Association", "Frozen — Madonna", "A Rainy Night in Georgia — Brook Benton|Rainy Night in Georgia", "Rainy Days and Mondays — Carpenters", "Rain King — Counting Crows", "Rain — The Beatles"],
        4: ["Tornado of Souls — Megadeth", "Foggy Mountain Breakdown — Flatt & Scruggs", "Snowblind — Black Sabbath"]
      }
    },
    {
      icon: '💃',
      text: 'Name a song with a <b>woman\'s name</b> in the title',
      tiers: {
        1: ["Layla — Derek and the Dominos", "Jolene — Dolly Parton", "Roxanne — The Police", "Billie Jean — Michael Jackson", "Valerie — Amy Winehouse", "Iris — Goo Goo Dolls", "Lola — The Kinks", "Gloria — Laura Branigan", "Sweet Caroline — Neil Diamond|Caroline"],
        2: ["Rosanna — Toto", "Delilah — Tom Jones", "Eleanor Rigby — The Beatles", "Mandy — Barry Manilow", "Maria — Blondie", "Ophelia — The Lumineers", "Michelle — The Beatles", "Cecilia — Simon & Garfunkel", "Ruby — Kaiser Chiefs", "Angie — The Rolling Stones", "Maggie May — Rod Stewart", "Proud Mary — Creedence Clearwater Revival", "Lucy in the Sky with Diamonds — The Beatles"],
        3: ["Sara — Fleetwood Mac", "Rhiannon — Fleetwood Mac", "Lucille — Little Richard", "Dear Prudence — The Beatles", "Lovely Rita — The Beatles", "Martha My Dear — The Beatles", "Julia — The Beatles", "Nikita — Elton John", "Beth — Kiss", "Elvira — The Oak Ridge Boys", "Help Me, Rhonda — The Beach Boys|Rhonda", "Barbara Ann — The Beach Boys"],
        4: ["Bernadette — The Four Tops", "Eloise — Barry Ryan", "To Ramona — Bob Dylan|Ramona", "Amie — Pure Prairie League", "Anna (Go to Him) — Arthur Alexander|Anna", "Sheila — Tommy Roe"]
      }
    },
    {
      icon: '🎬',
      text: 'Name a song from a <b>movie soundtrack</b>',
      tiers: {
        1: ["My Heart Will Go On — Céline Dion", "Let It Go — Idina Menzel", "Eye of the Tiger — Survivor", "Lose Yourself — Eminem", "Circle of Life — Elton John", "Danger Zone — Kenny Loggins", "Skyfall — Adele", "Shallow — Lady Gaga & Bradley Cooper", "A Whole New World — Peabo Bryson & Regina Belle", "Hakuna Matata — The Lion King Cast", "We Don't Talk About Bruno — Encanto Cast", "You've Got a Friend in Me — Randy Newman"],
        2: ["Stayin' Alive — Bee Gees|Staying Alive", "Footloose — Kenny Loggins", "Take My Breath Away — Berlin", "Under the Sea — Samuel E. Wright", "How Far I'll Go — Auli'i Cravalho", "This Is Me — Keala Settle", "Don't You (Forget About Me) — Simple Minds", "The Power of Love — Huey Lewis and the News", "Singin' in the Rain — Gene Kelly|Singing in the Rain", "Part of Your World — Jodi Benson", "Colors of the Wind — Vanessa Williams", "Gonna Fly Now — Bill Conti", "Moon River — Audrey Hepburn", "Be Our Guest — Angela Lansbury", "Friend Like Me — Robin Williams"],
        3: ["Falling Slowly — Glen Hansard & Markéta Irglová", "Lust for Life — Iggy Pop", "Born Slippy .NUXX — Underworld|Born Slippy", "Everybody's Talkin' — Harry Nilsson", "Misirlou — Dick Dale", "Son of a Preacher Man — Dusty Springfield", "Remember Me — Miguel", "Streets of Philadelphia — Bruce Springsteen", "Mad World — Gary Jules", "Mrs. Robinson — Simon & Garfunkel", "Reflection — Christina Aguilera", "I'll Make a Man Out of You — Donny Osmond", "Go the Distance — Michael Bolton", "Supercalifragilisticexpialidocious — Julie Andrews", "Poor Unfortunate Souls — Pat Carroll"],
        4: ["The Windmills of Your Mind — Noel Harrison|Windmills of Your Mind", "Chim Chim Cher-ee — Dick Van Dyke", "Let's Go Fly a Kite — Dick Van Dyke", "Feed the Birds — Julie Andrews", "Hellfire — Tony Jay", "Hushabye Mountain — Dick Van Dyke"]
      }
    },
    {
      icon: '1️⃣',
      text: 'Name a song with a <b>one-word</b> title',
      tiers: {
        1: ["Yesterday — The Beatles", "Imagine — John Lennon", "Thriller — Michael Jackson", "Halo — Beyoncé", "Royals — Lorde", "Hello — Adele", "Happy — Pharrell Williams", "Firework — Katy Perry", "Titanium — David Guetta ft. Sia", "Believe — Cher"],
        2: ["Creep — Radiohead", "Radioactive — Imagine Dragons", "Havana — Camila Cabello", "Umbrella — Rihanna", "Clocks — Coldplay", "Vogue — Madonna", "Sorry — Justin Bieber", "Lithium — Nirvana", "Sabotage — Beastie Boys", "Closer — The Chainsmokers", "Heroes — David Bowie", "Runaway — Kanye West", "Cheerleader — OMI", "Sunflower — Post Malone & Swae Lee"],
        3: ["Everlong — Foo Fighters", "Teardrop — Massive Attack", "Maps — Yeah Yeah Yeahs", "Kids — MGMT", "Blackstar — David Bowie", "Oblivion — Grimes"],
        4: ["Windowlicker — Aphex Twin", "Archangel — Burial", "Svefn-g-englar — Sigur Rós", "Hoppípolla — Sigur Rós", "Pyramids — Frank Ocean", "Xtal — Aphex Twin", "Glósóli — Sigur Rós", "Hyperballad — Björk", "Jóga — Björk"]
      }
    }
  ];

  /* =====================================================
     HELPERS
     ===================================================== */
  function $(id) { return document.getElementById(id); }

  var store = {
    get: function (k) {
      try { var v = localStorage.getItem('deepcuts_' + k); return v === null ? null : JSON.parse(v); }
      catch (e) { return null; }
    },
    set: function (k, v) {
      try { localStorage.setItem('deepcuts_' + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    }
  };

  function norm(s) {
    return String(s)
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/&/g, 'and')
      .replace(/^(the|a)\s+/, '')
      .replace(/[^a-z0-9]/g, '');
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      var cur = [i], rowMin = i;
      for (j = 1; j <= b.length; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        var v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        cur[j] = v;
        if (v < rowMin) rowMin = v;
      }
      if (rowMin > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function dateKey(d) {
    d = d || new Date();
    return '' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
  }

  function dayNumber(d) {
    d = d || new Date();
    var utc = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    return Math.floor((utc - Date.UTC(2026, 9, 3)) / 86400000) + 1;
  }

  /* Parse the library */
  PROMPTS.forEach(function (p) {
    p.entries = [];
    [1, 2, 3, 4].forEach(function (t) {
      p.tiers[t].forEach(function (str) {
        var parts = str.split('|');
        var main = parts[0];
        var title = main.split(' — ')[0];
        var keys = [title].concat(parts.slice(1)).map(norm);
        p.entries.push({ display: main, tier: t, keys: keys });
      });
    });
  });

  function evaluate(prompt, raw) {
    var n = norm(raw);
    if (!n) return null;
    var i, k, e;
    for (i = 0; i < prompt.entries.length; i++) {
      e = prompt.entries[i];
      if (e.keys.indexOf(n) !== -1) return e;
    }
    var best = null;
    for (i = 0; i < prompt.entries.length; i++) {
      e = prompt.entries[i];
      for (k = 0; k < e.keys.length; k++) {
        var key = e.keys[k];
        var tol = key.length >= 14 ? 2 : key.length >= 7 ? 1 : 0;
        if (!tol) continue;
        var d = lev(n, key, tol);
        if (d <= tol && (!best || d < best.d)) best = { e: e, d: d };
      }
    }
    return best ? best.e : null;
  }

  function topHint(prompt) {
    var pool = prompt.entries.filter(function (e) { return e.tier === 4; });
    return pool[Math.floor(Math.random() * pool.length)].display;
  }

  /* =====================================================
     SOUND
     ===================================================== */
  var audioCtx = null;
  var muted = store.get('muted') === true;

  function beep(freq, dur, type, when, vol) {
    if (muted) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var t = audioCtx.currentTime + (when || 0);
      var o = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      o.type = type || 'sine';
      o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.08, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t); o.stop(t + dur);
    } catch (e) { /* ignore */ }
  }

  function playTier(tier) {
    if (tier === 0) { beep(150, 0.35, 'sawtooth', 0, 0.06); return; }
    var seqs = {
      1: [330],
      2: [440, 554],
      3: [523, 659, 784],
      4: [523, 659, 784, 1047, 1319]
    };
    seqs[tier].forEach(function (f, i) { beep(f, 0.18, 'triangle', i * 0.07, 0.09); });
  }

  /* =====================================================
     STATE + SCREENS
     ===================================================== */
  var state = null;
  var timerRaf = null;
  var countdownInt = null;

  var screens = { start: $('screen-start'), game: $('screen-game'), end: $('screen-end') };

  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle('active', k === name);
    });
    if (name !== 'end' && countdownInt) { clearInterval(countdownInt); countdownInt = null; }
    window.scrollTo(0, 0);
  }

  function setDepth(score) {
    document.body.style.setProperty('--depth', Math.min(score / 700, 1).toFixed(3));
  }

  function animateNumber(el, from, to, ms, fmt) {
    var start = performance.now();
    function frame(now) {
      var p = Math.min((now - start) / ms, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = Math.round(from + (to - from) * eased);
      el.textContent = fmt ? fmt(v) : v;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function fmtMeters(points) { return (points * 10).toLocaleString(); }

  /* ---------- Start screen ---------- */
  function refreshStart() {
    var streak = store.get('streak') || { last: null, count: 0 };
    var yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    var alive = streak.last === dateKey() || streak.last === dateKey(yesterday);
    $('stat-streak').textContent = alive ? streak.count : 0;
    $('stat-best').textContent = store.get('best') || 0;
    var done = store.get('daily_' + dateKey());
    $('btn-daily').textContent = done ? "See Today's Result" : "Play Today's Daily";
    setDepth(0);
  }

  /* ---------- Starting a game ---------- */
  function pickPrompts(rand) {
    return shuffle(PROMPTS, rand).slice(0, ROUNDS);
  }

  function startGame(mode) {
    var rand = mode === 'daily' ? mulberry32(parseInt(dateKey(), 10)) : Math.random;
    state = {
      mode: mode,
      prompts: pickPrompts(rand),
      i: 0,
      score: 0,
      combo: 0,
      results: [],
      answered: false,
      deadline: 0
    };
    show('game');
    setDepth(0);
    $('score').textContent = '0';
    showPrompt();
  }

  function renderDots() {
    var html = '';
    for (var i = 0; i < ROUNDS; i++) {
      var r = state.results[i];
      var cls = 'dot';
      if (r) cls += ' ' + TIERS[r.tier].cls;
      else if (i === state.i) cls += ' cur';
      html += '<i class="' + cls + '"></i>';
    }
    $('dots').innerHTML = html;
  }

  function showPrompt() {
    var p = state.prompts[state.i];
    state.answered = false;
    renderDots();
    $('prompt').innerHTML =
      '<span class="pnum">Prompt ' + (state.i + 1) + ' of ' + ROUNDS + '</span>' +
      '<span class="icon">' + p.icon + '</span>' + p.text;
    var input = $('answer');
    input.disabled = false;
    input.value = '';
    $('btn-submit').textContent = 'Lock it in';
    $('feedback').innerHTML = '';
    updateCombo(false);
    startTimer();
    input.focus();
  }

  function updateCombo(pop) {
    var el = $('combo');
    if (state.combo >= 2) {
      var bonus = Math.min(state.combo - 1, 5) * 5;
      el.textContent = '🔥 Combo x' + state.combo + '  (+' + bonus + ' bonus)';
      if (pop) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
    } else {
      el.textContent = '';
    }
  }

  /* ---------- Timer ---------- */
  function startTimer() {
    stopTimer();
    var fill = $('timer-fill');
    var secs = $('secs');
    state.deadline = Date.now() + ROUND_SECONDS * 1000;
    fill.classList.remove('danger');
    secs.classList.remove('danger');
    var lastWhole = -1;

    function tick() {
      var left = Math.max(state.deadline - Date.now(), 0);
      fill.style.width = (left / (ROUND_SECONDS * 1000) * 100) + '%';
      var whole = Math.ceil(left / 1000);
      secs.textContent = whole;
      if (whole <= 5) {
        fill.classList.add('danger');
        secs.classList.add('danger');
        if (whole !== lastWhole && whole > 0) beep(880, 0.06, 'square', 0, 0.03);
      }
      lastWhole = whole;
      if (left <= 0) { timerRaf = null; submit(true); return; }
      timerRaf = requestAnimationFrame(tick);
    }
    timerRaf = requestAnimationFrame(tick);
  }

  function stopTimer() {
    if (timerRaf) { cancelAnimationFrame(timerRaf); timerRaf = null; }
  }

  /* ---------- Answering ---------- */
  function submit(timedOut) {
    if (!state || state.answered) return;
    stopTimer();
    state.answered = true;

    var p = state.prompts[state.i];
    var raw = $('answer').value.trim();
    var hit = timedOut && !raw ? null : evaluate(p, raw);
    var tier = hit ? hit.tier : 0;
    var pts = TIERS[tier].pts;

    if (tier >= 2) state.combo++; else state.combo = 0;
    var bonus = (tier >= 2 && state.combo >= 2) ? Math.min(state.combo - 1, 5) * 5 : 0;

    var before = state.score;
    state.score += pts + bonus;

    state.results.push({
      tier: tier,
      pts: pts,
      bonus: bonus,
      answer: raw,
      display: hit ? hit.display : null,
      timedOut: !!(timedOut && !raw)
    });

    animateNumber($('score'), before * 10, state.score * 10, 700, function (v) { return v.toLocaleString(); });
    setDepth(state.score);
    renderDots();
    updateCombo(true);
    showFeedback(p, hit, tier, pts, bonus, raw, timedOut);
    playTier(tier);

    var input = $('answer');
    input.disabled = true;
    var last = state.i === ROUNDS - 1;
    var btn = $('btn-submit');
    btn.textContent = last ? 'See results' : 'Next ›';
    btn.focus();
  }

  function showFeedback(p, hit, tier, pts, bonus, raw, timedOut) {
    var t = TIERS[tier];
    var html = '<div class="fb ' + t.cls + '">';
    html += '<div class="fb-top"><span class="fb-tier">' + (tier === 0 ? (timedOut && !raw ? "Time's up" : t.name) : t.name) + '</span>';
    html += '<span class="fb-pts" id="fb-pts">+0</span></div>';
    if (hit) {
      html += '<div class="fb-line">✓ ' + esc(hit.display) + '</div>';
    } else if (raw) {
      html += '<div class="fb-line">No match for “' + esc(raw) + '”. If it\'s real, my library just missed it.</div>';
    } else {
      html += '<div class="fb-line">No answer locked in.</div>';
    }
    if (bonus) html += '<div class="fb-bonus">🔥 Combo bonus +' + bonus + '</div>';
    if (tier !== 4) html += '<div class="fb-hint">A 100-pointer would\'ve been: <b>' + esc(topHint(p)) + '</b></div>';
    html += '</div>';

    var box = $('feedback');
    box.innerHTML = html;

    var ptsEl = $('fb-pts');
    animateNumber(ptsEl, 0, pts + bonus, 500, function (v) { return '+' + v; });

    if (tier >= 3) burst(box, tier === 4 ? 34 : 16, tier === 4 ? ['#1ed760', '#ffffff', '#ffd23f'] : ['#a855f7', '#ffffff']);
    if (tier === 4) {
      var app = $('app');
      app.classList.remove('shake'); void app.offsetWidth; app.classList.add('shake');
    }
  }

  function burst(anchor, n, colors) {
    var fx = $('fx');
    var r = anchor.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + 40;
    for (var i = 0; i < n; i++) {
      var p = document.createElement('div');
      p.className = 'p';
      var a = Math.random() * Math.PI * 2;
      var d = 60 + Math.random() * 140;
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = colors[i % colors.length];
      p.style.setProperty('--x', Math.cos(a) * d + 'px');
      p.style.setProperty('--y', Math.sin(a) * d + 'px');
      fx.appendChild(p);
      (function (el) { setTimeout(function () { el.remove(); }, 950); })(p);
    }
  }

  function next() {
    if (!state || !state.answered) return;
    if (state.i >= ROUNDS - 1) { finish(); return; }
    state.i++;
    showPrompt();
  }

  /* ---------- Finish ---------- */
  function finish() {
    var data = { score: state.score, results: state.results, mode: state.mode, key: dateKey() };

    var best = store.get('best') || 0;
    data.newBest = state.score > best;
    if (data.newBest) store.set('best', state.score);

    if (state.mode === 'daily') {
      var streak = store.get('streak') || { last: null, count: 0 };
      var today = dateKey();
      if (streak.last !== today) {
        var y = new Date(); y.setDate(y.getDate() - 1);
        streak = { last: today, count: streak.last === dateKey(y) ? streak.count + 1 : 1 };
        store.set('streak', streak);
      }
      store.set('daily_' + today, data);
    }
    showEnd(data);
  }

  function rankFor(score) {
    if (score >= 700) return '💿 One in a Million';
    if (score >= 550) return '🏺 Vinyl Archaeologist';
    if (score >= 400) return '⛏️ Crate Digger';
    if (score >= 250) return '🎧 Playlist Digger';
    if (score >= 100) return '📻 Radio Listener';
    return '🏄 Surface Skimmer';
  }

  function shareText(data) {
    var grid = data.results.map(function (r) { return TIERS[r.tier].emoji; }).join('');
    var head = data.mode === 'daily' ? 'Deep Cuts #' + dayNumber() : 'Deep Cuts (endless)';
    return head + ' — ' + data.score + ' pts · ' + fmtMeters(data.score) + ' m deep\n' + grid;
  }

  function showEnd(data) {
    show('end');
    setDepth(data.score);
    $('end-mode').textContent = data.mode === 'daily' ? 'Daily Dive #' + dayNumber() : 'Endless Dive';
    animateNumber($('end-score'), 0, data.score, 900);
    $('end-sub').textContent = 'points · ' + fmtMeters(data.score) + ' m deep' + (data.newBest ? ' · new best!' : '');
    $('end-rank').textContent = rankFor(data.score);
    $('end-grid').textContent = data.results.map(function (r) { return TIERS[r.tier].emoji; }).join('');

    $('end-list').innerHTML = data.results.map(function (r) {
      var t = TIERS[r.tier];
      var label = r.display ? esc(r.display) : (r.answer ? esc(r.answer) : '—');
      var pts = r.tier === 0 ? '0' : '+' + (r.pts + r.bonus);
      return '<li class="' + t.cls + '"><span>' + (r.tier === 0 ? '✗ ' : '✓ ') + label + '</span><span>' + pts + '</span></li>';
    }).join('');

    $('btn-share').textContent = 'Copy result';
    $('btn-share').onclick = function () { copy(shareText(data), $('btn-share')); };

    if (data.mode === 'daily') {
      updateCountdown();
      countdownInt = setInterval(updateCountdown, 1000);
    } else {
      $('end-next').textContent = '';
    }
    playTier(data.score >= 400 ? 4 : data.score >= 200 ? 3 : 2);
    if (data.score >= 400) burst($('end-grid'), 40, ['#1ed760', '#ffffff', '#ffd23f']);
  }

  function updateCountdown() {
    var now = new Date();
    var mid = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var s = Math.max(Math.floor((mid - now) / 1000), 0);
    $('end-next').textContent = 'Next daily dive in ' + pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60);
  }

  function copy(text, btn) {
    function done() {
      var old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = old; }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
      ta.remove();
    }
  }

  /* =====================================================
     EVENTS
     ===================================================== */
  $('btn-daily').addEventListener('click', function () {
    var done = store.get('daily_' + dateKey());
    if (done) showEnd(done); else startGame('daily');
  });

  $('btn-endless').addEventListener('click', function () { startGame('endless'); });
  $('btn-again').addEventListener('click', function () { startGame('endless'); });
  $('btn-home').addEventListener('click', function () { refreshStart(); show('start'); });

  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!state) return;
    if (state.answered) next(); else submit(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && state && state.answered && screens.game.classList.contains('active')) {
      if (document.activeElement !== $('btn-submit')) { e.preventDefault(); next(); }
    }
  });

  var muteBtn = $('btn-mute');
  muteBtn.textContent = muted ? '🔇' : '🔊';
  muteBtn.addEventListener('click', function () {
    muted = !muted;
    store.set('muted', muted);
    muteBtn.textContent = muted ? '🔇' : '🔊';
    if (!muted) beep(660, 0.12, 'triangle', 0, 0.08);
  });

  refreshStart();
})();
