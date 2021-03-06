import Dexie from 'dexie';

export const API_URL = `https://api.gurbaninow.com/v1/`;

export const searchTypes = [
  'First Letter of Begining of Shabad (Gurakhar)',
  'First Letter from Anywhere of Shabad (Gurakhar)',
  'Full Word (Gurakhar)',
  'Full Word (English)',
];

export const sourceTypes = [ 'All Scripts', 'Sri Guru Granth Sahib', 'Vaaran', 'Dasam Granth and Amrit Keertan' ];

export const sourceIds = { G: 1, D: 3, B: 2, A: 3 };

const defaultStore = { fontSizeMultiplier: 1, nightMode: false };

export const setSettings = (store = defaultStore) => {
  try {
    localStorage.setItem('settings', JSON.stringify(store));
    return store;
  } catch(e) {
    localStorage.setItem('settings', JSON.stringify(defaultStore));
    return defaultStore;
  }
};

export const getSettings = (initialStore = defaultStore) => {
  try {
    let settings = localStorage.getItem('settings');
    return settings ? JSON.parse(settings) : setSettings(initialStore);
  } catch (err) {
    return setSettings();
  }
};

export const getDB = () => {
  const db = new Dexie("SikhJS");
  db.version(1).stores({
    bookmarks: "++id,timestamp,title,key,value,[key+value]",
    sehaj_paath: "++id,timestamp,ang,title",
  });
  db.open();
  return db;
};

export const baanies = {
  "nitnem": [
    {
      "title": "Japji",
      "author": [1, 2],
      "info": "Japji Sahib is the first sacred composition found in the main Sikh current Guru called the Guru Granth Sahib, a scripture. It is a famous and concise summary of Sikh philosophy which was compiled by the founder of Sikhism and the first spiritual guide of the Sikhs known worldwide as Guru Nanak.  The compilation consists of the Mool Mantar, an opening Salok or verse, a set of 38 Pauris or hymns and a final closing Salok. This Bani called Japji Sahib, appears at the very beginning of the Guru Granth Sahib from Page 1 to Page 8 in the Holy Book of the Sikhs Nay! of Humanity. It, the most important Bani or \"set of verses\", and is lovingly recited by all Sikhs every morning. The word ‘Jap’ means to ‘recite’/‘to ‘chant’/\"to stay focused onto\". ‘Ji’ is a word that is used to show respect as is the word ‘Sahib’"
    },
    {
      "title": "Jaap Sahib",
      "author": [47],
      "info": "Jaap is the bani (set of hymns) uttered by Guru Gobind Singh ji, the Tenth Sikh Guru, the Tenth Nanak. It is one of the Five Banis recited by most practising Sikhs each morning and the bani that the Panj Pyare recite while preparing Amrit on the occasion of Amrit Sanchaar (Sikh Initiation), a ceremony held to admit initiates into the Khalsa Brotherhood. It is the second bani of the five in the daily morning prayer routine of a Sikh. This bani has the same place in the Dasam Granth as the Japji Sahib has in Guru Granth Sahib. Guru Gobind Singh was a worshipper of one God (Akal) this is proved by the first stanza of Jaap sahib. Guru Gobind Singh ji completed this bani before 1699, because this bani was recited during the installation of the khalsa. Professor Sahib Singh says that, \" Guru Gobind Singh went to Nahan in 1684 and lived there for approximately 3 years. During these three years guru Sahib may have composed the Jaap Sahib, the Swaiyey and the Akal Ustat. \""
    },
    {
      "title": "Tva Prasad Svaye",
      "author": [47],
      "info": "(Sudha Swayas) A Bani composed by Guru Gobind Singh which tells us how to worship and realise God. This Bani appears in the Dasam Granth on pages 13 to 15. Historical accounts says that htis bani was composed for bhim chand raja when gru ji was in pauta to show him that by having thousand of forces or infinite of land or kingdom one canot attain god. "
    },
    {
      "title": "Kabyo Bach Baynti Chaupai",
      "author": [47],
      "info": "Benti Chaupai or Chaupai sahib is a prayer or Bani composed by tenth Sikh Guru, Guru Gobind Singh. This bani is present in Charitar 404 of Dasam Granth in Bani Ath Pakhyan Chairtar Likhyatey. This Bani is one of the five Banis recited by the initiated Sikh every morning. It is also a part of evening prayer of the Sikhs called Rehras sahib. The Benti Chaupee can be read at any time during the day to provide protection, positive focus and energy. It is short composition which usually takes less than about 5 minutes to recite at a slow pace; it is written in simple Punjabi language and can be easily understood by most speakers of this language. Chaupai is the short name for the Sikh prayer or Gurbani whose full name is Kabiobach Bainti Chaupai. This composition is part of the second most important Sikh Holy Book called the Dasam Granth. The Bani comes after the section called Charitropakhyan. Many \"charitars\" (tricks; deceptions) of the world are shown in Charitropakhyan. Charitars highlight negative energies that can be found on earth. After composing Charitars, the tenth master composed the section that includes this particular bani. It is an Ardas or \"request\" or \"sincere plea\" to God for protection. "
    },
    {
      "title": "Anand Sahib",
      "author": [3],
      "info": "This Bani is part of the Nitnem (prayers) which are read by Amritdhari Sikhs in the morning. This Bani was written by Guru Amar Das, the third Guru of the Sikhs and forms part of the 5 Banis that are recited daily by baptised Sikhs. The Bani appears on pages 917 to 922 of Guru Granth Sahib, the Sikh Holy Scriptures. It is said that the person who recites this Holy Bani daily with dedication, attention and comprehension, will achieve Anand (Complete Happiness or Bliss) in life. Anand Sahib is also chanted at all religious ceremonies of the Sikhs irrespective of the nature of event, be it a marriage or death. In the beautiful composition and with the Grace of Sri Guru Amar Das, the mind and soul of a true Sikh remains steadfast and goal oriented in all circumstances of life. In an awakened mind with Guru Consciousness and intoxicated with the Nectar of Naam, one is always tuned with the Sweet Will of the Lord in all ups and downs of life, in pain and pleasure alike. His is a mind which is ever luminous with Guru Consciousness and is in perpetual intoxication of Naam and Amrit Bani, accepting without question the Hukam of the Almighty. All Dukh (Pain) and Sukh, (Pleasure) appear as the same to the devoted Sikh of the Guru. "
    },
    {
      "title": "Rehiras",
      "author": [1, 3, 4, 5, 47],
      "info": "Rehiras Sahib is the evening prayer of the Sikhs, which speaks of the greatness of Waheguru. As recorded in the Guru Granth Sahib, it contains the hymns of four different Gurus; Guru Nanak, Guru Amardas, Guru Ramdas and Guru Arjan Dev. Now part of the Rehiras Sahib the Benti Chaupai, attributed to Guru Gobind Singh was added to the Bani in the late 19th century. The addition was later ratified by the supreme Sikh religious body - the Shiromani Gurudwara Prabandhak Committee. Each section of the prayer casts light on another aspect of God. It is recited after a hard days work when one is tired out. After returning home, washing up, and changing into more comfortable indoor clothing the family gathers together to recite this Bani. It adds energy to both the body and the mind allowing one to conclude their day, giving thanks to the Almighty for the completion of another successful day.  The verse speaks of the greatness of Waheguru and the ways in which ones actions assists one in attaining spiritual enlightenment, liberating one\"s mind and soul. This Bani assists a person when they are physically weak, financially weak or concerned with other material and earthly matters (sickness, physical weakness, lack of money or property) the mundane things of life that sometimes leaves us all feeling hopeless, unsuccessful or worthless. It elevates your mental outlook, leaving you with a fresh and positive view of things, adding energy to one\"s being, in both ones working and home life as well.  "
    },
    {
      "title": "Kirtan Sohila",
      "author": [1, 4, 5],
      "info": "This is the night time prayer said by all Sikhs before they go to sleep. Three Sikh Gurus – Guru Nanak, Guru Ram Das and Guru Arjan - contributed five shabads in total to this bani on the pain of separation and celebrating the bliss of union with Almighty. The first three shabads were uttered by Guru Nanak, the fourth by Guru Ram Das, and the fifth by Guru Arjan Dev. It is the most harmonious Naad ever uttered. It multiplies the aura to the sensitivity of protection that it eliminates any negativity for miles and miles. When you are endangered by any species of direct or indirect source; when you want to protect yourself with the surrounding of the entire magnetic field of the earth, recite Kirtan Sohila. It is a cure for insomnia! The religious and artistic value of these hymns is superb. The first shabad visualises the union of the personal self with the Ultimate Reality. The second shabad presents the singularity of the Ultimate despite endless diversity of scriptures, teachers and philosophies. The third shabad rejects all modes of external piety and ritual, and vividly portrays the entire cosmos making harmonious worship. Instead of trays with lamps placed upon them with incense and other offerings, the skies become an integrated platter, the sun and moon the lamps, stars the beads, and all vegetation an offering of flowers. Loud chanting is replaced by the inner unstruck melody playing motionlessly. The fourth shabad explains the importance of the divine Name through which all suffering and transmigration is annulled. The fifth shabad celebrates life here in this world: we must avail ourselves of this wonderful opportunity to serve others and to win divine merit. The unknown Mystery becomes known to the enlightened person who thereafter enjoys the bliss and freedom of immortality. It is also recited before cremation, following a death. This Bani is found on pages 12 to 13 of the Sri Guru Granth Sahib, the Sikh Holy Scriptures. "}
  ],
  "others": [ 
    {
      "title": "Ardas",
      "author": [47, 48],
      "info": "The word Ardâs ( ਅਰਦਾਸ ) is derived from the Persian word \"Arazdashat\", meaning a request, a supplication, a prayer, a petition or an address to a superior authority. It is a Sikh prayer that is a done before performing or after undertaking any significant task; after reciting the daily Banis (prayers); or completion of a service like the Paath, kirtan (hymn-singing) program or any other religious program. In Sikhism, these prayers are also said before and after eating. The prayer is a plea to God to support and help the devotee with whatever he or she is about to undertake or has done."
    },
    {
      "title": "Arti",
      "author": [1, 16, 20, 12, 9, 47],
      "info": "Every evening in all Gurudwaras, after the recitation of Rehraas Sahib, the Keertan (singing) of Aarti through Gurbani shabads is performed by Raagis (musicians). This is a tremendously soothing experience, capable of taking us directly into the spiritual realms of devotion through music. Bhai Gurdaas Ji writes: ਸੋਦਰੁ ਆਰਤੀ ਗਾਵੀਐ ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਜਾਪੁ ਉਚਾਰਾ| |\"Sodar (Rehraas) and Aarti were sung (in the evening) and in Amrit-veal (the ambrosial hours) Japji (Sahib) was recited.\" Once actor Balraj Sahni asked the late Nobel Laureate Rabindra Nath Tagore, “You have written the national anthem for India. Can you write an international anthem for the whole world?” “It has already been written, not only international but for the entire universe, in the 16th century by Nanak,” replied Tagore. He referred to the Sikh aarti (ceremony of light). Tagore was so enamoured of this universal aarti that he personally translated it into Bengali."
    },
    {
      "title": "Asa Di Var",
      "author": [1, 2, 4],
      "info": "Asa Ki Var, is the term recorded in the index to the Guru Granth Sahib but this Gurbani is commonly called \"Asa di Var\". It is a composition by Guru Nanak, the founder of Sikhi and is sung by kirtania (religious musicians) at Sikh congregations or gatherings as part of the early morning service. The term \"Asa di Var\" comprises three words: The third word var means an ode or a lyrical verse; the word Asa which means \"hope\" in Punjabi) is also a Raag or musical measure used in the Guru Granth Sahib; and \"ki\" or \"di\" mean \"of\". Thus together the terms means \"A ballad of hope\". Raag Asa is the raga of pre-dawn hours and the custom of reciting the hymn at morning time is traced to the days of Guru Nanak himself. "
    },
    {
      "title": "Baareh Maahaa",
      "author": [5],
      "info": "Barah Maha (in Hindi), is a form of folk poetry in which the emotions and yearnings of the human heart are expressed in terms of the changing moods of Nature over the twelve months of the year. In this form of poetry, the mood of Nature in each particular month (of the Indian calendar) depicts the inner agony of the human heart which in most cases happens to be a woman separated from her spouse or lover. It is Guru Arjan's calendar poem in the measure Majh included in the Guru Granth Sahib. The opening verse of the composition presents the binary theme of the poem: the factual situation of the human soul\"s separation from the Divine Soul (kirati karam ke vichhure bound by our deeds are we parted from Thee), and its quest for union with Him (kari kirpa melahu ram by Thy grace grant union, 0\" Lord)."
    },
    {
      "title": "Basant Ki Var",
      "author": [5],
      "info": "Basant Ki Var, by Guru Arjan Dev, is the shortest of the twentytwo vars (holy poems composed in the style or tone of odes). Vars are heroic ballads included in the Guru Granth Sahib. Basant, is the Punjabi word for spring from which the musical measure the Var derives its \"title\". Like Malhar (the raga of the rainy season) the The Basant Ki Var is an ancient seasonal raga - the raga of springtime. The Basant ki Var is made up of three pauris (stanzas) only and each pauri consists of only five lines. Like the Var of Balvand and Satta, but unlike any other var in the Guru Granth Sahib, this Var does not have any slokas added to the pauris. The Var addresses itself to the theme of the Guru's grace which alone will enable man to overcome his ego or selfhood and, thus, attain, communion with the Creator. Springtime is the period of newness when vegetation stirs to life and nature comes to bloom in all its beauty and splendour."
    },
    {
      "title": "Chandi Di Var",
      "author": [47],
      "info": "Chandi Di Vaar (The Ballad of Chandi) is a philosphical, spiritual and heroic composition written by Guru Gobind Singh at Anandpur Sahib. It is fifth Bani of Dasam Granth. It is also called Vaar Sri Bhagauti Ji Ki (In some birs, the \"title\" is Vaar Durga ki). The first stanza of Chandi di Var forms the introductory part of the Ardas, the Sikh prayer. Guru Sahib used the Ballad to explain the priciples of Gurmat (the Guru's way)."
    },
    {
      "title": "Lawa",
      "author": [4],
      "info": "The laava (singular laav) are the four Shabads (sacred hymns) of the Anand Karaj (Sikh wedding ceremony). They form the central part of the marriage ceremony. The \"four rounds\" (char phaara) as they are sometimes called form a central part of this auspicious occasion.  "
    },
    {
      "title": "Raag Mala" ,
      "author": [0],
      "info": "Raagmala literally means a beaded string of musical melodies. \"Mala\" means \"a beaded string\" and \"Raga\" is a \"musical composition\". It is the name given to the last composition in the Guru Granth Sahib appearing after Mundavani (riddle) and a Salok by Guru Arjan Dev. Like Japji Sahib, which appears at the beginning of the Guru Granth Sahib this composition has no heading to show the name of the author."
    },
    {
      "title": "Shabad Hazarai Patsahi 10",
      "author": [47],
      "info": "Sabad Patshahi 10 are ten religious hymns composed by Guru Gobind Singh which are present in Dasam Granth. These hymns and also against any form of Idolatry, Human Worship or worshiping deities and also have comments on ritualistic practices of various schools in Hinduism like Sanyasis, Yogis, Bairagis etc. These are composed in nine different ragas and are in the style of the Bishanpadas. In these different sections, the tenth master, Guru Gobind Singh Ji has given expression to his philosophical and spiritual beliefs. He has negated the ritualism associated with yoga, belief in the Avatars and sensuality and inspired people to move on the path of truth and goodness. Alongside these is included a Khayal Patshahi 10 which is believed to be written by Guru Gobind Singh while he was in the jungles of Machhiwara."
    },
    {
      "title": "Shabad Hazarey",
      "author": [1, 4],
      "info": "Shabad Hazaray is the Bani of longing for the beloved Guru. It was written by Guru Arjan when he was separated from Guru Ram Das, his father for a duration of time. During that period of separation he sent these three letters to his beloved Guru and father expressing his longing for the \"blessed vision of the Guru\"."
    },
    {
      "title": "Slok Mahala 9",
      "author": [6],
      "info": "Salok Mahala 9 are the saloks by the ninth Sikh Guru, Guru Tegh Bahadur which form the concluding portion of the Guru Granth Sahib. They precede Guru Arjan's Mundavani and appear from page 1426 to 1429 of the Sikh current Guru Guru Granth. This composition consists of 57 (fifty seven) saloks and span just 4 pages of Gurbani. Each salok is a couplet consisting of 2 lines. This Bani was incorporated into the Guru Granth Sahib by Guru Gobind Singh, the last human Guru of the Sikhs."
    },
    {
      "title": "Sukhmani Sahib",
      "author": [4],
      "info": "Sukhmani or Sukhmani Sahib is the \"title\" given to the Gurbani in Raag Gauri Sukhmani in the Guru Granth Sahib which in turn appears in the major musical measure Raga Gauri to which it belongs. It is a lengthy composition, written by Guru Arjan Dev, the fifth Sikh Guru. The sacred prayer spans 35 pages from page 262 to page 296 of the Guru Granth Sahib. Surprisingly, many ardent Sikhs include the recitation of this Bani in their daily regimen of Nitnem. The physical site, where the Guru around AD 1602-03 composed this composition was once enclosed by a dense wood. The location is still marked on the bank of the Ramsar pool in the city of Amritsar, near the famous Golden Temple the Harimandir Sahib."
    }
  ]
};
