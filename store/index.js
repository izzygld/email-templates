import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      new: false,
      products: [
        {
          name: 'Yachad Reach',
          usage: 149.99,
          category: 'Yachad',
          new: true,
          article: 'Yachad Reach 2021',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1623650507/teachcoalition/screencapture-file-Users-izzygld-Desktop-test-copy-html-2021-06-14-08_54_27.png'
        },
        {
          name: 'Teach Newsletter',
          usage: 149.99,
          category: 'IPA',
          new: true,
          article: 'Teach Newsletter 2020',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1606226358/teachcoalition/email/screencapture-ouintranet-org-newsletters-ipa-newsletter-teach-newsletter-november-2020-11-24-15_55_50.png'
        },
        {
          name: 'DOU Kosher Direct',
          usage: 59.99,
          category: 'Kosher',
          new: false,
          article: 'direct',
          img: 'https://res.cloudinary.com/ncsy/image/upload/f_auto,q_auto/v1603013966/westcoast/screencapture-ouintranet-org-newsletters-kosher-newsletter-kosher-newsletter-2020-10-18-12_38_50.png'
        },
        {
          name: 'Westcoast',
          usage: 149.99,
          category: 'NCSY',
          new: true,
          article: 'Westcoast',
          img: 'https://res.cloudinary.com/ncsy/image/upload/f_auto,q_auto/v1603013801/westcoast/screencapture-ouintranet-org-newsletters-westcoast-newsletter-westcoast-new-test-2020-10-18-12_36_25.png'
        },
        {
          name: 'Yachad Communal Engagement',
          usage: 149.99,
          category: 'Yachad',
          new: true,
          article: 'Yachad Communal Engagement',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1599464524/Teamyachad/yachad-engagement4.jpg'
        },
        {
          name: 'OU Academy Training',
          usage: 149.99,
          category: 'OUGeneral',
          new: true,
          article: 'OU Academy',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546022/OU/general-email/ou-newsletter-academy-training-july-2020-2020-07-28-14_15_46.png'
        },
        {
          name: 'OU Today V2',
          usage: 200,
          category: 'OUGeneral',
          new: true,
          article: 'OU Today',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546078/OU/general-email/outoday-v2-2020-07-28-14_15_21.png'
        },
        {
          name: 'Mishna Yomit',
          usage: 149.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545995/OU/general-email/ou_torah_mishna_yomit.png'
        },
        {
          name: 'Yachad Ivdu',
          usage: 149.99,
          category: 'Yachad',
          new: true,
          article: 'Yachad Ivdu 2021',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1613655557/Torah/email/screencapture-ouintranet-org-newsletters-yachad-newsletter-ivdu-test-2021-02-18-15_26_26.png'
        },
        {
          name: 'Yachad Communal',
          usage: 149.99,
          category: 'Yachad',
          new: true,
          article: 'Yachad Communal 2021',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1613655563/Torah/email/screencapture-ouintranet-org-newsletters-yachad-newsletter-copy-2021-02-18-15_26_04.png'
        },
        {
          name: 'Hashoneh Halachot',
          usage: 28.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545994/OU/general-email/hashoneh-halachot.png'
        },
        {
          name: 'HaShoneh Halachos 2: Mishneh Torah',
          usage: 39.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546037/OU/general-email/hashoneh-halachot2.png'
        },
        {
          name: 'Torah Weekly',
          usage: 49.99,
          category: 'OUTorah',
          new: true,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546049/OU/general-email/torah-weekly.png'
        },
        {
          name: 'Shnayim Mikrah',
          usage: 12.99,
          category: 'OUTorah',
          new: true,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546041/OU/general-email/shnayim-mikrah.png'
        },
        {
          name: 'Sefirah',
          usage: 29.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546042/OU/general-email/sefirah.png'
        },
        {
          name: 'One By One',
          usage: 18.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546024/OU/general-email/one-by-one.png'
        },
        {
          name: 'Torah Weekly',
          usage: 49.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546049/OU/general-email/torah_weekly.png'
        },
        {
          name: 'Taryag',
          usage: 129.99,
          category: 'OUTorah',
          new: false,
          article: 'OU Torah',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546070/OU/general-email/taryag.png'
        },
        {
          name: 'Shabbat Shalom',
          usage: 59.99,
          category: 'shabbatshalom',
          new: false,
          article: 'Shabbat Shalom',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546025/OU/general-email/shabbatshalom.png'
        },
        {
          name: 'Shabbat Shalom 2020',
          usage: 200,
          category: 'shabbatshalom',
          new: true,
          article: 'Shabbat Shalom',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546067/OU/general-email/shabbatshalomv2.png'
        },
        {
          name: 'OU Press new',
          usage: 80.99,
          category: 'OuPress',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546032/OU/general-email/oupress-new.png'
        },
        {
          name: 'OU Press Sale',
          usage: 80.99,
          category: 'OuPress',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546035/OU/general-email/oupress-sale.png'
        },
        {
          name: 'OU Press News',
          usage: 59.99,
          category: 'OuPress',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546002/OU/general-email/ou-press-news.png'
        },
        {
          name: 'OU Press Blank',
          usage: 59.99,
          category: 'OuPress',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546060/OU/general-email/ou-press-blank.png'
        },
        {
          name: 'Job News',
          usage: 59.99,
          category: 'OuJob',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546029/OU/general-email/ou-jobs-news.png'
        },
        {
          name: 'Job Events',
          usage: 59.99,
          category: 'OuJob',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546014/OU/general-email/ou-jobs-events.png'
        },
        {
          name: 'Community Events',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546056/OU/general-email/community-events.png'
        },
        {
          name: 'Speakers Bureau',
          usage: 59.99,
          category: 'Community',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545999/OU/general-email/community_newsletter-ous-speakers-bureau.png'
        },
        {
          name: 'Community Fair',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546055/OU/general-email/community-fair.png'
        },
        {
          name: 'Community Letter',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545993/OU/general-email/community-letter.png'
        },
        {
          name: 'Community Tefillah Tips',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546004/OU/general-email/community-tefillah-tips.png'
        },
        {
          name: 'Synagogue & Community Services Activities',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546064/OU/general-email/synagogue-community-services-activities.png'
        },
        {
          name: 'Youth Professionals Letter',
          usage: 59.99,
          category: 'Community',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546012/OU/general-email/youth-professionals-letter.png'
        },
        {
          name: 'Yachad Advisor',
          usage: 59.99,
          category: 'Yachad',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546007/OU/general-email/advisor.png'
        },
        {
          name: 'Yachad Advisor Updated',
          usage: 59.99,
          category: 'Yachad',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546046/OU/general-email/yachad-advisor.png'
        },
        {
          name: 'JUF Newsletter',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546031/OU/general-email/juf-newsletter.png'
        },
        {
          name: 'Our Way',
          usage: 59.99,
          category: 'Yachad',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546066/OU/general-email/our-way.png'
        },
        {
          name: 'Shabbat Shalom',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546012/OU/general-email/shabbat-shalom.png'
        },
        {
          name: 'Team Yachad',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546035/OU/general-email/team-yachad.png'
        },
        {
          name: 'Weekly newsletter',
          usage: 59.99,
          category: 'Yachad',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546056/OU/general-email/weekly-newsletter.png'
        },
        {
          name: 'Yachad Gifts',
          usage: 59.99,
          category: 'Yachad',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546013/OU/general-email/yachad-gifts.png'
        },
        {
          name: 'Yachad L’Olam',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546007/OU/general-email/yachad-lolam.png'
        },
        {
          name: 'Yachad Monthly Calendar',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546051/OU/general-email/yachad-monthly-calendar.png'
        },
        {
          name: 'Yachad Template',
          usage: 59.99,
          category: 'Yachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546039/OU/general-email/yachad-template.png'
        },

        {
          name: 'FTDO Rabbi Micha Greenland',
          usage: 59.99,
          category: 'NCSY',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546010/OU/general-email/ftdo.png'
        },
        {
          name: 'Leadership Development Roundup',
          usage: 59.99,
          category: 'NCSY',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546076/OU/general-email/regional-roundup.png'
        },
        {
          name: 'NCSY Header, text and video',
          usage: 59.99,
          category: 'NCSY',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546016/OU/general-email/ncsy-header.png'
        },
        {
          name: 'NCSY Summer',
          usage: 59.99,
          category: 'NCSY',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546039/OU/general-email/ncsy-summer.png'
        },
        {
          name: 'Daily Halacha',
          usage: 59.99,
          category: 'Kosher',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545994/OU/general-email/daily-halacha.png'
        },
        {
          name: 'Kosher Alerts',
          usage: 59.99,
          category: 'Kosher',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546033/OU/general-email/kosher-alerts.png'
        },
        {
          name: 'Alumni Weekly',
          usage: 59.99,
          category: 'Alumni',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546043/OU/general-email/alumni-weekly.png'
        },
        {
          name: 'Full header image',
          usage: 59.99,
          category: 'IPA',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546043/OU/general-email/fullheader-image.png'
        },
        {
          name: 'TeachNYS Newsletter',
          usage: 59.99,
          category: 'IPA',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596545999/OU/general-email/Teachnys-newsletter.png'
        },
        {
          name: 'OUAdvocacy Newsletter',
          usage: 59.99,
          category: 'IPA',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546080/OU/general-email/Teachnys-partner.png'
        },
        {
          name: 'Jewish Action',
          usage: 59.99,
          category: 'JewishAction',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546067/OU/general-email/ja.png'
        },
        {
          name: 'Jewish Action 2020',
          usage: 59.99,
          category: 'JewishAction',
          new: true,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546106/OU/general-email/jewishaction2020.png'
        },
        {
          name: 'Israel Free Spirit',
          usage: 59.99,
          category: 'ifs',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546057/OU/general-email/ifs.png'
        },
        {
          name: 'Staff Education Newsletter',
          usage: 59.99,
          category: 'StaffEducation',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546022/OU/general-email/staff-education.png'
        },
        {
          name: 'Board Alerts',
          usage: 59.99,
          category: 'BoardAlerts',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546011/OU/general-email/board-alerts.png'
        },
        {
          name: 'Board Weekly',
          usage: 59.99,
          category: 'BoardAlerts',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546068/OU/general-email/board-weekly.png'
        },
        {
          name: 'OU Insider',
          usage: 59.99,
          category: 'BoardAlerts',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546065/OU/general-email/ou-insider.png'
        },
        {
          name: 'Synagogue & Community Services',
          usage: 59.99,
          category: 'BoardAlerts',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546063/OU/general-email/SynagoguesCommunityservice.png'
        },
        {
          name: 'OU Israel – Layla',
          usage: 59.99,
          category: 'OUIsrael',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546084/OU/general-email/ou-israel-layla.png'
        },
        {
          name: 'OU Israel – General',
          usage: 59.99,
          category: 'OUIsrael',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546084/OU/general-email/OUisrael-geeneral.png'
        }, {
          name: 'Rabbi Weinrebs',
          usage: 59.99,
          category: 'RabbiWienrebs',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546019/OU/general-email/rabbi-wienberbs.png'
        }, {
          name: 'Barych Dayan Haemet',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546052/OU/general-email/baruch-dayan-emet.png'
        }, {
          name: 'OU Employee News',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546045/OU/general-email/ou-employee-news.png'
        }, {
          name: 'Open Positions',
          usage: 59.99,
          category: 'OUGeneral',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546044/OU/general-email/open-positions.png'
        }, {
          name: 'Team Yachad Calendar',
          usage: 59.99,
          category: 'TeamYachad',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546038/OU/general-email/team-yachad-calendar.png'
        },

        {
          name: 'Arnold- Gerson',
          usage: 59.99,
          category: 'ArnoldGerson',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546008/OU/general-email/arnold-gerson.png'
        },
        {
          name: 'NextGen',
          usage: 59.99,
          category: 'NextGen',
          new: false,
          article: 'jacket',
          img: 'https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596546077/OU/general-email/nextgen.png'
        }
      ]
    },
    getters: {
      OUTorah: state => filter(state.products, 'category', 'OUTorah'),
      shabbatshalom: state => filter(state.products, 'category', 'shabbatshalom'),
      OuPress: state => filter(state.products, 'category', 'OuPress'),
      OuJob: state => filter(state.products, 'category', 'OuJob'),
      Community: state => filter(state.products, 'category', 'Community'),
      Yachad: state => filter(state.products, 'category', 'Yachad'),
      NCSY: state => filter(state.products, 'category', 'NCSY'),
      Kosher: state => filter(state.products, 'category', 'Kosher'),
      IPA: state => filter(state.products, 'category', 'IPA'),
      JewishAction: state => filter(state.products, 'category', 'JewishAction'),
      ifs: state => filter(state.products, 'category', 'ifs'),
      BoardAlerts: state => filter(state.products, 'category', 'BoardAlerts'),
      OUIsrael: state => filter(state.products, 'category', 'OUIsrael'),
      RabbiWienrebs: state => filter(state.products, 'category', 'RabbiWienrebs'),
      OUGeneral: state => filter(state.products, 'category', 'OUGeneral'),
      TeamYachad: state => filter(state.products, 'category', 'TeamYachad'),
      ArnoldGerson: state => filter(state.products, 'category', 'ArnoldGerson'),
      NextGen: state => filter(state.products, 'category', 'NextGen'),
      men: state => filter(state.products, 'category', 'men'),
      new: state => filter(state.products, 'new', true),
      all: state => filter(state.products)
    },
    mutations: {
      switchnew: state => {
        state.new = !state.new
      },
      clearCartCount: state => {
        state.cartTotal = 0
      },
      clearCartContents: state => {
        state.cart = {}
      },
      addItem: (state, item) => {
        state.cartTotal++
        if (item.name in state.cart) {
          state.cart[item.name].count++
        } else {
          let stateItem = Object.assign({}, item)
          stateItem.count = 1
          state.cart[item.name] = stateItem
        }
      }
    }
  })
}

export default createStore

// helper
const filter = (array, key, value) => array.filter(item => item[key] === value)
