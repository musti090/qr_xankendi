/*
 * Sərgi məlumatları.
 * Mənbə: 1.docx sənədi.
 *
 * Hər əsərin öz keçidi var: index.html#<id>   (məs.: index.html#agabeyim-aga)
 * Alternativ olaraq:          index.html?eser=<id>
 * QR kodlar bu keçidlərə yönləndirilə bilər.
 *
 * "description" massivində:
 *   - adi sətir  -> paraqraf
 *   - { poem: [...] } -> şeir (bayatı) bloku
 */
window.SERGI = {
  SITE: {
    brand: "Sərgi bələdçisi",
    eyebrow: "Kataloq",
    title: "Sərgidəki əsərlər",
    lede: "Ətraflı məlumat üçün əsəri seçin: əvvəlcə əsər, sonra müəllif haqqında məlumat açılacaq."
  },

  AUTHORS: [
    {
      id: "altay-haciyev",
      name: "Altay Hacıyev",
      lifespan: "1931–2019",
      role: "Azərbaycanın Xalq rəssamı",
      photo: "images/muellifler/altay-haciyev.jpg",
      photoAlt: "Rəssam Altay Hacıyevin portreti",
      focus: "28% 40%",
      bio: [
        "Altay Əmir oğlu Hacıyev 2 aprel 1931-ci ildə Bakı şəhərində rəssam Əmir Hacıyevin ailəsində anadan olmuşdur. O, 1951-ci ildə Əzim Əzimzadə adına Bakı Rəssamlıq Məktəbini, 1959-cu ildə isə Kiyev Dövlət Rəssamlıq İnstitutunu bitirmişdir. Azərbaycan təsviri sənətində rəngkarlıq, qrafika və kitab illüstrasiyası sahələrində zəngin fəaliyyət göstərən rəssam 1960-cı ildən SSRİ Rəssamlar İttifaqının üzvü olmuşdur.",
        "Azərbaycan təsviri sənətinin inkişafındakı xidmətlərinə görə Altay Hacıyev 1 dekabr 1982-ci ildə Azərbaycan SSR-in Əməkdar rəssamı, 30 may 2002-ci ildə isə Azərbaycan Respublikasının Xalq rəssamı fəxri adlarına layiq görülmüşdür. O, həmçinin 1995-ci ildə “Humay” mükafatı ilə təltif edilmiş, 2004-cü ildən isə Azərbaycan Respublikası Prezidentinin fərdi təqaüdçüsü olmuşdur. Görkəmli sənətkar 12 fevral 2019-cu ildə vəfat etmişdir."
      ]
    },
    {
      id: "ismayil-memmedov",
      name: "İsmayıl Məmmədov",
      lifespan: "1948–2016",
      role: "Azərbaycanın Əməkdar rəssamı",
      photo: "images/muellifler/ismayil-memmedov.jpg",
      photoAlt: "Rəssam İsmayıl Məmmədov öz əsərlərinin önündə",
      focus: "30% 30%",
      bio: [
        "İsmayıl Əsəd oğlu Məmmədov 31 mart 1948-ci ildə Bakı şəhərində anadan olmuşdur. O, 1963–1968-ci illərdə Ə. Əzimzadə adına Bakı Rəssamlıq Məktəbində, 1968–1974-cü illərdə İ. Repin adına Sankt-Peterburq Rəngkarlıq, Heykəltaraşlıq və Memarlıq İnstitutunun dəzgah rəngkarlığı fakültəsində təhsil almışdır. Rəssam 1978-ci ildən Azərbaycan Rəssamlar İttifaqının üzvüdür.",
        "O, yerli və beynəlxalq sərgilərin fəal iştirakçısı olmuşdur. İsmayıl Məmmədov 1996-cı ildən Akademik Milli Dram Teatrında quruluşçu rəssam, 1998-ci ildən Azərbaycan Dövlət Musiqili Komediya Teatrının baş rəssam vəzifəsində çalışmışdır.",
        "İsmayıl Məmmədovun Bakıda (1985, 1993, 2008, 2009), Londonda (2001), Moskvada (2004) fərdi yaradıcılıq sərgiləri keçirilmişdir.",
        "İsmayıl Məmmədova 30 may 2002-ci ildə Azərbaycan Respublikasının Əməkdar rəssamı fəxri adı verilmişdir. İsmayıl Məmmədov 12 dekabr 2016-cı ildə vəfat etmişdir."
      ]
    },
    {
      id: "intiqam-agayev",
      name: "İntiqam Ağayev",
      lifespan: "1966-cı il təvəllüdlü",
      role: "Azərbaycan Rəssamlar İttifaqının üzvü",
      photo: "images/muellifler/intiqam-agayev.jpg",
      photoAlt: "Rəssam İntiqam Ağayevin portreti",
      focus: "60% 40%",
      bio: [
        "İntiqam Tofiq oğlu Ağayev 1966-cı ildə Sumqayıtda anadan olmuşdur. O, 1983–1989-cu illərdə Əzim Əzimzadə adına Rəssamlıq Məktəbində təhsil almışdır. İntiqam Ağayev 1992-ci ildən Şuşa, Ağdam, Tərtər, Füzuli bölgələrində ön cəbhələrdə döyüşdükdən sonra 1998-ci ildə II qrup əlil kimi ordudan tərxis olunmuşdur. İntiqam Ağayevin əsərlərində əsasən Abşeron təbiəti və mədəniyyəti, qədim Bakı memarlığı özünəməxsus rəng çalarları ilə təsvir olunmuşdur.",
        "Rəssam 2000-ci ildən bir çox yerli və beynəlxalq sərgilərdə iştirak edir. İntiqam Ağayev Azərbaycan Rəssamlar İttifaqının üzvüdür.",
        "Rəssamın 2016-cı ildə V. Səmədova adına salonda “Xatirələrim” adlı fərdi sərgisi keçirilmişdir.",
        "Onun əsərləri Azərbaycan Respublikası Qalereyalarının fondunda və şəxsi kolleksiyalarda saxlanılır."
      ]
    },
    {
      id: "elxan-agayev",
      name: "Elxan Ağayev",
      lifespan: "1961-ci il təvəllüdlü",
      role: "Azərbaycan Rəssamlar İttifaqının üzvü",
      photo: "images/muellifler/elxan-agayev.jpg",
      photoAlt: "Rəssam Elxan Ağayevin portreti",
      focus: "50% 45%",
      bio: [
        "Elxan Məzahir oğlu Ağayev 1961-ci ildə Sumqayıt şəhərində anadan olmuşdur. Ata-baba yurdu Laçın rayonunun Minkənd kəndidir. O, 1977–1983-cü illərdə Əzim Əzimzadə adına Rəssamlıq Məktəbində təhsil almış, 1980–1981-ci illərdə isə Riqa şəhərində hərbi xidmətdə olmuşdur. Rəssam 1983–1989-cu illərdə Azərbaycan Dövlət İncəsənət Universitetində rəssamlıq ixtisası üzrə ali təhsil almışdır.",
        "Elxan Ağayev uzun illər Sumqayıt şəhərində Bülbül adına İncəsənət Məktəbində pedaqoji fəaliyyət göstərmiş, eyni zamanda fərdi şəkildə rəssamlıq üzrə dərslər vermiş və fəal yaradıcılıqla məşğul olmuşdur. Azərbaycan Rəssamlar İttifaqının üzvüdür. Hazırda təqaüdçü olmasına baxmayaraq, həm pedaqoji, həm də yaradıcılıq fəaliyyətini uğurla davam etdirir."
      ]
    },
    {
      id: "settar-behlulzade",
      name: "Səttar Bəhlulzadə",
      lifespan: "1909–1974",
      role: "Azərbaycanın Xalq rəssamı",
      photo: "images/muellifler/settar-behlulzade.jpg",
      photoAlt: "Rəssam Səttar Bəhlulzadənin portreti",
      focus: "55% 30%",
      bio: [
        "Səttar Bəhlul oğlu Bəhlulzadə 15 dekabr 1909-cu ildə Bakının Əmircan kəndində anadan olmuşdur. O, 1927–1931-ci illərdə Azərbaycan Rəssamlıq Məktəbində oxumuş və Əzim Əzimzadənin rəhbərliyi ilə “Kommunist” qəzetində yaradıcılığa başlamışdır. Onun 1931–1933-cü illərdə qəzetdə müasir məzmunlu ilk karikaturaları çap olunmuşdur. Səttar Bəhlulzadə 1933–1940-cı illərdə Moskva Dövlət Rəssamlıq İnstitutuna daxil olmuşdur. Məşhur rəssamlar V. A. Favorski və Q. M. Şaqalın rəhbərliyi altında rəssamlıq sənətinin incəliklərini öyrənmişdir.",
        "Moskvadan qayıtdıqdan sonra Səttar Bəhlulzadənin yaradıcılığında tarixi mövzular və tarixi şəxsiyyətlərin təsviri (“Babək üsyanı”, “Fətəli xan”, “Xəttat Mir Əli” və s.) əsas yer tutmuşdur. Müharibədən sonrakı illərdə rəssam Abşeronun neft mədənlərini, bağ və kəndlərini təsvir edən rəsmlər yaratmışdır.",
        "Rəssamın fərdi sərgiləri Əlcəzair, Misir, Livan, Suriya, Tunis, Norveç, ADR, Çexoslovakiya, Bolqarıstan, İraq, Kuba, Kanada, Belçika, Fransa, Yaponiya və dünyanın bir sıra başqa ölkələrində nümayiş etdirilmişdir.",
        "Hal-hazırda Səttar Bəhlulzadənin əsərləri Azərbaycan Milli İncəsənət Muzeyində və Azərbaycan Dövlət Rəsm Qalereyasında, eləcə də Moskvada, xarici ölkə muzeylərində və çox böyük hissəsi şəxsi kolleksiyalarda saxlanılır.",
        "Rəssam “Azərbaycanın əməkdar incəsənət xadimi”, “Azərbaycan Xalq rəssamı”, “Azərbaycan SSR Dövlət mükafatı laureatı” olmuşdur. Səttar Bəhlulzadənin 100 illik yubileyi 2009-cu ildə YUNESKO-nun qərarı ilə bütün dünyada qeyd olunmuşdur.",
        "Səttar Bəhlulzadə 13 oktyabr 1974-cü ildə Rusiyanın Moskva şəhərində vəfat etmiş, Əmircana gətirilərək doğma kəndində dəfn olunmuşdur."
      ]
    }
  ],

  WORKS: [
    {
      id: "agabeyim-aga",
      title: "Ağabəyim Ağa",
      author: "altay-haciyev",
      medium: "Kətan, yağlı boya",
      size: "145×100 sm",
      collection: "Azərbaycan Milli İncəsənət Muzeyi",
      image: "images/eserler/agabeyim-aga.jpg",
      w: 165, h: 288,
      alt: "Milli geyimli qadın əlində saz bağda oturub; arxa fonda Şuşanın mənzərəsi və memarlıq abidələri",
      description: [
        "Azərbaycanın Xalq rəssamı Altay Hacıyevin yaradıcılığı milli ənənələrə və xalqın mənəvi dəyərlərinə bağlılığı ilə seçilir. Rəssamın “Xalqımızın ulduzları” adlı silsilə əsərlərində Azərbaycan tarixində və ədəbiyyatında dərin iz qoymuş görkəmli Azərbaycan qadınlarının obrazları öz əksini tapmışdır.",
        "Ağabəyim Ağa Qarabağ xanı İbrahimxəlil xanın qızı, Qacar hökmdarı Fətəli şahın xanımı olmuşdur. İstedadlı şairə kimi tanınan Ağabəyim Ağa Qacar sarayında siyasi fəaliyyəti ilə seçilmişdir. Ömrünün böyük hissəsini Vətəndən uzaqda keçirməsi onun həyatında dərin iz buraxmış, yaradıcılığına həzin, hüzünlü qürbət həsrəti, Vətən nisgili gətirmişdir. Tehranda yaşadığı illərdə vətən həsrətini əks etdirən bayatıları ilə tarixə düşmüşdür.",
        { poem: ["Mən aşiqəm, Qarabağ,", "Şəki, Şirvan, Qarabağ.", "Tehran cənnətə dönsə,", "Yaddan çıxmaz Qarabağ."] },
        "Rəssam Ağabəyim Ağanı əlində saz, milli geyimdə, Şuşanın mənzərəsi və memarlıq abidələri fonunda təsvir etməklə onun Vətən həsrətini və mənəvi dünyasını vurğulamışdır."
      ]
    },
    {
      id: "asiq-peri",
      title: "Aşıq Pəri. Dağ çiçəyi",
      author: "altay-haciyev",
      medium: "Kətan, yağlı boya",
      size: "120×70 sm",
      collection: "Azərbaycan Milli İncəsənət Muzeyi",
      image: "images/eserler/asiq-peri.jpg",
      w: 212, h: 369,
      alt: "Ağ örpəkli, əlində çiçək tutan qadın obrazı rəngarəng dekorativ fonda",
      description: [
        "Azərbaycanın Xalq rəssamı Altay Hacıyevin yaradıcılığı milli ənənələrə və xalqın mənəvi dəyərlərinə bağlılığı ilə seçilir. Rəssamın “Xalqımızın ulduzları” adlı silsilə əsərlərində Azərbaycan tarixində və ədəbiyyatında dərin iz qoymuş görkəmli Azərbaycan qadınlarının obrazları öz əksini tapmışdır.",
        "XIX əsrdə yaşamış Azərbaycanın qadın aşıq sənətinin banisi olan Aşıq Pəri dövrünün görkəmli nümayəndələrindən olmuşdur. Qarabağ xanlığı dövründə Şuşada yaşayıb-yaratmış şairə dövrünün ədəbi-mədəni inkişafında müstəsna yer tutmuşdur. Yaşadığı mühafizəkar aşıq sənəti mühitində bir qadın sənətkar olaraq tanınması onun böyük cəsarətinin, istedadının və mənəvi gücünün göstəricisidir.",
        "Rəssam əsərdə Aşıq Pərinin şəxsiyyətinə xas olan məhz bu gücü, cəsarəti və sənətkar ruhunu ön plana çəkmişdir. Obrazın milli ornamentlər, miniatür üslublu dekorativ çalarlar və təbiət mənzərəsi fonunda təsvir olunması onun poetik ruhunu, zərifliyini və milli-mənəvi dəyərlərə bağlılığını ifadə edir."
      ]
    },
    {
      id: "qarabagda-idman-bayrami",
      title: "Qarabağda idman bayramı",
      author: "ismayil-memmedov",
      collection: "Azərbaycan Dövlət Rəsm Qalereyası",
      image: "images/eserler/qarabagda-idman-bayrami.jpg",
      w: 461, h: 345,
      alt: "Ağ, qara və kürən atlar üzərində yarışan süvarilər; arxa planda yarışı izləyən tamaşaçılar",
      description: [
        "İsmayıl Məmmədovun “Qarabağda idman bayramı” əsərində Qarabağın milli-mədəni ənənələrinin ayrılmaz hissəsi olan atçılıq və idman yarışlarının yaratdığı bayram əhval-ruhiyyəsi təsvir olunmuşdur. Kompozisiyanın ön planında müxtəlif rəngli atlar üzərində yarışan süvarilər, arxa planda isə hadisəni izləyən insanların fiqurları əksini tapır. Atların dinamik hərəkəti, süvarilərin mübarizə dolu duruşları və tamaşaçıların iştirakı təsvirə canlılıq və emosional gərginlik bəxş edir.",
        "Rəssam əsərin kompozisiya həllində hərəkət və dinamizmi ön plana çəkərək obrazların qarşılıqlı əlaqəsi vasitəsilə yarışın coşqun atmosferini yaratmışdır. Ağ, qara və kürən atların rəng kontrastı torpaq tonları və soyuq çalarlarla vəhdətdə kompozisiyanın koloristik bütövlüyünü formalaşdırır. Sərbəst, ekspressiv fırça yaxıları və rənglərin enerjili tətbiqi əsərin emosional təsir gücünü artırır.",
        "Əsər Qarabağın atçılıq ənənələrini, milli idman mədəniyyətini və kollektiv bayram ruhunu bədii obrazlarla ifadə edən, xalqın həyat tərzini və mədəni yaddaşını əks etdirən sənət nümunəsidir."
      ]
    },
    {
      id: "bayati-shiraz",
      title: "Bayatı-Şiraz",
      author: "intiqam-agayev",
      medium: "Kətan, yağlı boya",
      size: "130×90 sm",
      collection: "Azərbaycan Dövlət Rəsm Qalereyası",
      image: "images/eserler/bayati-shiraz.jpg",
      w: 459, h: 307,
      alt: "Milli geyimli üç musiqiçi xalça motivləri və şərti memarlıq təsvirləri fonunda ifa edir",
      description: [
        "İntiqam Ağayevin “Bayatı-Şiraz” əsəri Azərbaycan milli musiqi irsinin və ənənəvi mədəni mühitin təsviri sənət vasitəsilə bədii təcəssümüdür. Əsərin kompozisiya mərkəzində milli geyimli musiqiçilərin obrazları yer alır. Onları əhatə edən xalça motivləri, ornamental elementlər və şərti memarlıq təsvirləri milli məişət və sənət ənənələrinin vahid bədii mühitdə birləşməsini təmin edir. Musiqiçilərin ifa prosesindəki vəziyyəti əsərin adını təşkil edən Bayatı-Şiraz muğamının emosional və fəlsəfi mahiyyətinə vizual işarə kimi çıxış edir.",
        "Əsərdə dekorativ üslub, formaların stilizasiyası və perspektivin şərti həlli əsas ifadə vasitələridir. Sarı, narıncı və qırmızı kimi isti rənglərin firuzəyi, mavi və yaşıl tonlarla qarşılaşdırılması kompozisiyaya dinamik koloristik ahəng verir. Qalın boya yaxmaları, ritmik xətlər və ornamental detallar təsvirin ekspressivliyini artırır. Rəssam musiqinin ritmini və milli koloriti rəng, forma və kompozisiya vasitəsilə vizuallaşdıraraq Azərbaycan mədəniyyətinin ənənəvi dəyərlərini müasir dekorativ-plastik ifadə tərzində təqdim edir."
      ]
    },
    {
      id: "qarabagname",
      title: "Qarabağnamə",
      author: "intiqam-agayev",
      medium: "Kətan, yağlı boya",
      size: "90×110 sm",
      image: "images/eserler/qarabagname.jpg",
      w: 321, h: 392,
      alt: "Qarabağ memarlıq nümunələri, qala və yaşayış tikililəri, ön planda çapan atlar, parlaq dekorativ rənglərdə",
      description: [
        "İntiqam Ağayevin “Qarabağnamə” əsəri Qarabağın tarixi-mədəni yaddaşını, milli memarlıq ənənələrini və təbiət gözəlliklərini obrazlı şəkildə əks etdirir. Kompozisiyada Qarabağa xas memarlıq nümunələri, qala və yaşayış tikililəri, zəngin təbiət motivləri vahid dekorativ bütövlükdə təqdim olunmuşdur.",
        "Əsərin parlaq və kontrastlı koloriti, xüsusilə sarı, narıncı, yaşıl və firuzəyi çalarların ahəngi kompozisiyaya yüksək emosional təsir və dinamika verir. Sərbəst fırça yaxıları, stilizə edilmiş formalar və xalça ornamentlərini xatırladan naxışlar milli dekorativ sənət ənənələri ilə əlaqəni gücləndirir.",
        "Rəssam bu əsərdə Qarabağı yalnız coğrafi məkan kimi deyil, tarixi yaddaşın, milli kimliyin və mənəvi irsin daşıyıcısı kimi təqdim edir. “Qarabağnamə” milli-mədəni dəyərlərin müasir rəngkarlıq dili ilə ifadəsinin diqqətəlayiq nümunəsidir."
      ]
    },
    {
      id: "xankendi-motivi",
      title: "Xankəndi motivi",
      author: "elxan-agayev",
      medium: "Kətan, yağlı boya",
      size: "150×200 sm",
      image: "images/eserler/xankendi-motivi.jpg",
      w: 727, h: 544,
      alt: "Sağda tağlı pəncərəli və sütunlu bina, solda monumental abidə, ön planda ağaclar və yaşıllıq",
      description: [
        "Elxan Ağayevin “Xankəndi motivi” əsərində şəhərin tarixi-memarlıq siması və müasir inkişafını səciyyələndirən məkanlar bədii interpretasiya vasitəsilə təqdim olunur. Kompozisiyanın sağ tərəfində yerləşən tağlı pəncərə və sütunlarla zənginləşdirilmiş memarlıq nümunəsi, sol tərəfdə isə monumental abidə diqqət mərkəzindədir. Bu elementlərin qarşılıqlı yerləşməsi əsərdə tarixi irs və müasir memarlıq arasında vizual dialoq yaradır.",
        "Rəssam məkanın təsvirində perspektiv və işıq-kölgə münasibətlərindən məharətlə istifadə edərək kompozisiyaya dərinlik və məkan genişliyi qazandırır. Ön plandakı ağaclar, yaşıllıq sahələri və memarlıq elementləri təbiətlə şəhər mühitinin harmoniyasını ifadə edir. Sarımtıl, qızılı və yaşılımtıl çalarların üstünlük təşkil etdiyi kolorit əsərə isti, sakit və nikbin ovqat bəxş edir.",
        "Əsər Xankəndinin tarixi-mədəni mühitini, memarlıq irsini və yenilənən şəhər obrazını əks etdirən bədii mənzərə kimi diqqət çəkir. Burada keçmişin izləri ilə müasirliyin yaratdığı yeni vizual mühit vahid kompozisiya daxilində birləşdirilir."
      ]
    },
    {
      id: "xankendi-zefer-parki",
      title: "Xankəndi. Zəfər Parkı",
      author: "elxan-agayev",
      medium: "Kətan, yağlı boya",
      size: "200×300 sm",
      image: "images/eserler/xankendi-zefer-parki.jpg",
      w: 739, h: 553,
      alt: "Xankəndi Zəfər Parkının panoramik mənzərəsi: mərkəzdə monumental qurğu, ətrafında xiyabanlar, arxa planda dağlar",
      description: [
        "Elxan Ağayevin “Xankəndi. Zəfər Parkı” əsərində Azərbaycanın tarixi Zəfərinin rəmzi olan Xankəndi Zəfər Parkının panoramik mənzərəsi təsvir olunmuşdur. Kompozisiyanın mərkəzində yerləşən monumental memarlıq qurğusu parkın əsas vizual və ideya mərkəzi kimi diqqəti cəlb edir. Onun ətrafında salınmış yaşıllıq zolaqları, xiyabanlar, yollar və şəhər mənzərəsi vahid məkan bütövlüyü yaradır.",
        "Rəssam əsərdə geniş panoramik baxış bucağından istifadə edərək şəhərin təbii landşaftını və müasir memarlıq mühitini qarşılıqlı əlaqədə təqdim edir. Arxa planda uzanan dağ silsilələri kompozisiyaya dərinlik və monumentallıq qazandırır. Yaşılımtıl, sarımtıl və torpaq çalarlarının üstünlük təşkil etdiyi rəng həlli, səmanın yumşaq işıq effektləri ilə birləşərək əsərdə nikbin və təntənəli ovqat formalaşdırır.",
        "Əsər yalnız konkret məkanın bədii təsviri deyil, həm də Xankəndidə baş verən tarixi dəyişikliklərin, quruculuq prosesinin və Zəfər ideyasının təsviri salnaməsi kimi əhəmiyyət daşıyır."
      ]
    },
    {
      id: "yuxari-dashalti",
      title: "Yuxarı Daşaltı",
      author: "settar-behlulzade",
      medium: "Kətan, yağlı boya",
      size: "70×140 sm",
      collection: "Azərbaycan Milli İncəsənət Muzeyi",
      image: "images/eserler/yuxari-dashalti.jpg",
      w: 490, h: 368,
      alt: "Mavi və bənövşəyi tonlarda əzəmətli dağ silsiləsi, ön planda qayalı relyef və ağaclar",
      description: [
        "Səttar Bəhlulzadənin “Yuxarı Daşaltı” əsəri rəssamın Azərbaycan təbiətinə xas poetik duyumunu, lirik-romantik dünyagörüşünü və özünəməxsus koloristik təfəkkürünü əks etdirən mənzərə nümunəsidir. Kompozisiyanın əsasını əzəmətli dağ silsilələri, geniş düzənlik və ön planda təsvir olunan qayalı relyef təşkil edir. Məkanın dərinliyi uzaq və yaxın planların rəng və ton münasibətləri vasitəsilə ustalıqla qurulmuşdur.",
        "Əsərdə soyuq mavi, boz və bənövşəyi çalarların isti sarı, oxra və yaşıl rənglərlə qarşılaşdırılması təbiətin işıq-hava mühitinə xüsusi ifadəlilik verir. Sərbəst, dinamik yaxılar və rəng ləkələrinin ritmik ahəngi mənzərəyə canlılıq və emosional gərginlik bəxş edir. Rəssam təbiəti yalnız topoqrafik gerçəklik kimi deyil, daxili hiss və təəssüratların bədii ifadəsi kimi təqdim edir.",
        "“Yuxarı Daşaltı” əsərində monumental dağ obrazı ilə ön plandakı canlı təbiət elementləri arasında yaranan qarşılıqlı münasibət Azərbaycan landşaftının həm əzəmətini, həm də incə lirizmini üzə çıxarır. Bu baxımdan əsər Səttar Bəhlulzadənin milli təbiət motivlərini fərdi bədii duyum və yüksək rəngkarlıq mədəniyyəti ilə ümumiləşdirmək məharətinin səciyyəvi təzahürüdür."
      ]
    }
  ]
};
