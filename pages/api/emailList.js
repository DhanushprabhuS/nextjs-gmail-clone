export default function handler(req, res) {

    const emails = [
        {
          id: 1,
          type: 'primary',
          expeditor: "Decoding Team",
          messageTitle: "Event Dicoding Developer Coaching #79 : DevOps",
          message: "Event Dicoding Developer Coaching #79. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis eos assumenda alias velit sunt sequi consequuntur fugiat ipsum hic quaerat dolor recusandae architecto impedit, perspiciatis quae quia id minima!",
          timestamp: "11:45 AM",
        },
        {
          id: 2,
          type: 'primary',
          expeditor: "Harisenin Team",
          messageTitle: "Web Developer 2023",
          message: "Persaingan kerja makin ketat aja nih! Kamu mau berkarir jadi Web Developer?",
          timestamp: "10:40 AM",
        },
        {
          id: 3,
          type: 'primary',
          expeditor: "Meysa Mahfudhoh AWS",
          messageTitle: "Start a conversation with your new connection, Meysa",
          message: "Meysa Mahfudhoh has accepted your invitation. Let's start a conversation."+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "9:30 AM",
        },
        {
          id: 4,
          type: 'primary',
          expeditor: "Amazon Web Services",
          messageTitle: "Registration Complete | AWS Builders Online Series",
          message: "You are already registered for AWS Builders Online Series. Mark your calendar now so you do not miss it.",
          timestamp: "4:15 AM",
        },
        {
          id: 5,
          type: 'primary',
          expeditor: "Google Forms",
          messageTitle: "SIB Dicoding Cycle 4 - Form Google Developers",
          message: "Thanks for filling out SIB Dicoding Cycle 4 - Form Pendaftaran Ulang"+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "9:30 PM",
        },
        {
          id: 6,
          type: 'primary',
          expeditor: "Nila Mirnawati",
          messageTitle: "I want to connect",
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "Jan 10 2023",
        },
        {
          id: 7,
          type: 'primary',
          expeditor: "Citra, Course-Net",
          messageTitle: "Cyber Security Kerjanya Coding! Holiday Special!",
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?'+"Kerja di bidang Cyber Security tanpa harus jago ngoding?. Emang iya ya?",
          timestamp: "Jan 7 2023",
        },
        {
          id: 8,
          type: 'primary',
          expeditor: "Testportal",
          messageTitle: "Invitation to take a test: Campus Merdeka Batch 4",
          message: "Hello! Below is a link to your test result page. Remember to keep your link."+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "Jan 5",
        },
        {
          id: 9,
          type: 'promotion',
          expeditor: "Resume Nerd",
          messageTitle: "You're on the right track",
          message: "Hi Vicky Pratama Setia, We've noticed that you saved your resume but haven't finished it yet.",
          timestamp: "Jan 3",
        },
        {
          id: 10,
          type: 'promotion',
          expeditor: "Skilvul",
          messageTitle: "BESOK! TerraTalks Eps.17",
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?'+"Kamu salah satu orang yang tertarik berkarir sebagai Product Manager dan penasaran tentang apa itu Market Analysis?",
          timestamp: "Jan 1",
        },
        {
          id: 11,
          type: 'promotion',
          expeditor: "Discord",
          messageTitle: "Revin - Admission Team mentioned you",
          message: "#diskusi-kelas-icp (IT Career Preparation by Alterra Academy)",
          timestamp: "12/30/22",
        },
        {
          id: 12,
          type: 'promotion',
          expeditor: "Niagahoster",
          messageTitle: "Masih Kesulitan Membuat Website? sini-sini",
          message: "Hai Vicky Pratama Setia Mahardika?"+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "12/30/22",
        },
        {
          id: 13,
          type: 'promotion',
          expeditor: "Lintang From Dewaweb",
          messageTitle: "[Dewatalks Invitation] Growing Opportunities in the Internet of Things",
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?'+"Pernah menggunakan asisten virtual untuk memainkan lagu, menyalakan AC, atau menyalakan lampu jarak jauh?",
          timestamp: "12/17/22",
        },
        {
          id: 14,
          type: 'promotion',
          expeditor: "Codepen",
          messageTitle: "Snowball Loading, a SelectMenu Appetizer, and Warm Design Aesthetics",
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?'+"This week, we wrap up the year with a spectacular snowball from preloader pro Jon Kantner.",
          timestamp: "12/15/22",
        },
        {
          id: 15,
          type: 'promotion',
          expeditor: "LinkedIn",
          messageTitle: "Appen is hiring: Work from Home Opportunities in Indonesia",
          message: "Top job picks for you Appen	Work from Home Opportunities in Indonesia Social Media Evaluator (Indonesian Fluency).",
          timestamp: "12/12/22",
        },
        {
          id: 16,
          type: 'promotion',
          expeditor: "Coursera",
          messageTitle: "Special offer: free courses to get you started",
          message: "Get started on Coursera with your exclusive offer! There’s something for everyone.",
          timestamp: "12/10/22",
        },
        {
          id: 17,
          type: 'social',
          expeditor: "Bangkit Academy",
          messageTitle: "Skill untuk memulai karier di bidang Cloud Computing",
          message: "Dear Future Indonesia, Ingin tahu tentang apa itu Cloud Computing dan bagaimana peluang karir di bidang Cloud Computing?"+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "12/01/22",
        },
        {
          id: 18,
          type: 'social',
          expeditor: "Discord",
          messageTitle: "vips mentioned you in WPU",
          message: "diskusi-kelas-icp (IT Career Preparation by Alterra Academy).",
          timestamp: "11/30/22",
        },
        {
          id: 19,
          type: 'social',
          expeditor: "Niagahoster",
          messageTitle: "10 Inspirasi Usaha yang Menjanjikan untuk Dicoba di 2023",
          message: "Hai Vicky Pratama Setia Mahardika Tahun baru didepan mata dan Anda masih merasa begini-begini saja.",
          timestamp: "11/27/22",
        },
        {
          id: 20,
          type: 'social',
          expeditor: "OY! Indonesia",
          messageTitle: "Buat & kirim invoice penagihan dengan mudah!",
          message: "Buat dan kirim invoice penagihan ke pelanggan via email/chat di satu dashboard dengan menyediakan opsi pembayaran melalui OY! Payment Link, mulai dari transfer bank, virtual account, e-wallet, hingga kartu debit/kredit.",
          timestamp: "11/12/22",
        },
        {
          id: 21,
          type: 'social',
          expeditor: "Indosat Ooredoo Hut.",
          messageTitle: "Kami Ingin Dengar Kabarmu VICKY PRATAMA SETIA MAHARDIKA, Alumni IDCamp",
          message: "Dear VICKY PRATAMA SETIA MAHARDIKA, Apa kabar? Lama tak berjumpa setelah program beasiswa IDCamp di tahun-tahun sebelumnya berakhir.",
          timestamp: "11/10/22",
        },
        {
          id: 22,
          type: 'social',
          expeditor: "DQLab",
          messageTitle: "DQLab Wrapped 2022! Terima Kasih untuk Kebersamaan Kita",
          message: "Dear, Sahabat Data Tahun 2022 sebentar lagi berganti Terima kasih sudah belajar sepanjang tahun ini Upgrade skill untuk raih karier dan mimpi",
          timestamp: "11/5/22",
        },
        {
          id: 23,
          type: 'social',
          expeditor: "Jessica Cecilia Bud.",
          messageTitle: "Jessica just messaged you",
          message: "2 new messages await your response",
          timestamp: "11/4/22",
        },
        {
          id: 24,
          type: 'social',
          expeditor: "Kinobi Community",
          messageTitle: "Resume Completed!",
          message: "Hey 016_vicky pratama! One word. WOW! We are loving your resume. "+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, fugit, eius totam optio fuga dignissimos, iste iure enim voluptatibus quod! Reiciendis perferendis veniam ipsum vitae modi ullam? Ipsam, id?',
          timestamp: "11/1/22",
        },
        {
          id: 25,
          type: 'social',
          expeditor: "Jadi Hacker",
          messageTitle: "[OPEN REGIST] BUNDLING HACK - LEVEL 1 & 2",
          message: "Halo Ethical Hackers! Sebagai bagian dari komitmen kami untuk terus mengedepankan kemajuan literasi cyber security.",
          timestamp: "11/1/22",
        },
        {
          id: 26,
          type: 'social',
          expeditor: "Google Forms",
          messageTitle: "FORM PEMIRA JURUSAN TEKNIK INFORMATIKA 2023",
          message: "Thanks for filling out FORM PEMIRA JURUSAN TEKNIK INFORMATIKA 2023.",
          timestamp: "10/30/22",
        },
        {
          id: 27,
          type: 'promotion',
          expeditor: "Dicoding Team",
          messageTitle: "Anda telah dinyatakan hadir di Event Dicoding Developer Coaching #79 : DevOps",
          message: "Salam VICKY PRATAMA SETIA MAHARDIKA, Selamat, Anda telah dinyatakan hadir pada Event Dicoding Developer Coaching #79.",
          timestamp: "11:45 AM",
        },
        {
          id: 28,
          type: 'promotion',
          expeditor: "Harisenin Team",
          messageTitle: "Kamu bisa mulai jadi Web Developer di awal ahun 2023 lho",
          message: "Persaingan kerja makin ketat aja nih! Kamu mau berkarir jadi Web Developer?",
          timestamp: "10:40 AM",
        },
        {
          id: 29,
          type: 'promotion',
          expeditor: "Meysa Mahfudhoh via.",
          messageTitle: "Vicky Pratama, start a conversation with your new connection, Meysa",
          message: "Meysa Mahfudhoh has accepted your invitation. Let's start a conversation.",
          timestamp: "9:30 AM",
        },
        {
          id: 30,
          type: 'promotion',
          expeditor: "Amazon Web Services",
          messageTitle: "Registration Complete | AWS Builders Online Series",
          message: "You are already registered for AWS Builders Online Series. Mark your calendar now so you do not miss it.",
          timestamp: "4:15 PM",
        },
        {
          id: 31,
          type: 'primary',
          expeditor: "Google Forms",
          messageTitle: "SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
          message: "Thanks for filling out SIB Dicoding Cycle 4 - Form Pendaftaran Ulang",
          timestamp: "3:30 PM",
        },
        {
          id: 32,
          type: 'primary',
          expeditor: "Nila Mirnawati",
          messageTitle: "I want to connect",
          message: "Nila Mirnawati Student at Universitas Negeri Surabaya.",
          timestamp: "Jan 10",
        },
        {
          id: 33,
          type: 'primary',
          expeditor: "Citra, Course-Net",
          messageTitle: "Nggak Semua Cyber Security Kerjanya Ngoding!Holiday Special !",
          message: "Kerja di bidang Cyber Security tanpa harus jago ngoding?. Emang iya ya?",
          timestamp: "Jan 7",
        },
      ];

      console.log(req.query.type);

      if(req.query.type === 'all'){
        res.status(200).json({emails});
        return;
      }

      const data = emails.filter((e)=>e.type===req.query.type);

      res.status(200).json({ emails: data})
  }
  