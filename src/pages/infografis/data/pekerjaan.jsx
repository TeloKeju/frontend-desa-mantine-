const data = [
  {
    jenisPekerjaan: "Pelajar/Mahasiswa",
    jumlah: 1.034,
  },
  { jenisPekerjaan: "Mengurus Rumah Tangga", jumlah: 947 },
  { jenisPekerjaan: "Belum/Tidak Bekerja", jumlah: 1.124 },
  { jenisPekerjaan: "Wiraswasta", jumlah: 1.332 },
  { jenisPekerjaan: "Pensiunan", jumlah: 12 },
  { jenisPekerjaan: "Perdagangan", jumlah: 107 },
  { jenisPekerjaan: "Guru", jumlah: 29 },
  { jenisPekerjaan: "Perawat", jumlah: 2 },
  { jenisPekerjaan: "Pekerjaan Lainnya", jumlah: 18 },

  // { jenisPekerjaan: "Pegawai Negeri Sipil (PNS)", jumlah: 122 },
  // { jenisPekerjaan: "Petani/Pekebun", jumlah: 108 },
  // { jenisPekerjaan: "Karyawan Honorer", jumlah: 55 },
  // { jenisPekerjaan: "Nelayan/Perikanan", jumlah: 54 },
  // { jenisPekerjaan: "Karyawan Swasta", jumlah: 45 },
  // { jenisPekerjaan: "Buruh Harian Lepas", jumlah: 12 },
  // { jenisPekerjaan: "Tentara Nasional Indonesia (TNI)", jumlah: 9 },
  // { jenisPekerjaan: "Sopir", jumlah: 8 },
  // { jenisPekerjaan: "Karyawan BUMN", jumlah: 8 },
  // { jenisPekerjaan: "Guru", jumlah: 8 },
  // { jenisPekerjaan: "Karyawan BUMD", jumlah: 3 },
  // { jenisPekerjaan: "Buruh Nelayan/Perikanan", jumlah: 3 },
  // { jenisPekerjaan: "Tukang Kayu", jumlah: 3 },
  // { jenisPekerjaan: "Mekanik", jumlah: 3 },
  // { jenisPekerjaan: "Transportasi", jumlah: 2 },
  // { jenisPekerjaan: "Perdagangan", jumlah: 2 },
  // { jenisPekerjaan: "Tukang Batu", jumlah: 2 },
  // { jenisPekerjaan: "Perawat", jumlah: 2 },
  // { jenisPekerjaan: "Perangkat Desa", jumlah: 2 },
  // { jenisPekerjaan: "Tukang Jahit", jumlah: 1 },
  // { jenisPekerjaan: "Kepala Desa", jumlah: 1 },
  // { jenisPekerjaan: "Kepolisian RI (Polri)", jumlah: 1 },
  // { jenisPekerjaan: "Wartawan", jumlah: 1 },
  // { jenisPekerjaan: "Tukang Las/Pandai Besi", jumlah: 1 },
  // { jenisPekerjaan: "Pelaut", jumlah: 1 },
  // { jenisPekerjaan: "Pedagang", jumlah: 1 },
  // { jenisPekerjaan: "Konsultan", jumlah: 1 },
  // { jenisPekerjaan: "Industri", jumlah: 1 },
  // { jenisPekerjaan: "Dosen", jumlah: 1 },
  // { jenisPekerjaan: "Pemilik Usaha Jasa Hiburan dan Pariwisata", jumlah: 0 },
  // { jenisPekerjaan: "Bidan Swasta", jumlah: 0 },
  // { jenisPekerjaan: "Wakil Walikota", jumlah: 0 },
  // { jenisPekerjaan: "Konsultan Manajemen dan Teknis", jumlah: 0 },
  // { jenisPekerjaan: "Ustaz/Mubalig", jumlah: 0 },
  // { jenisPekerjaan: "Arsitektur/Desainer", jumlah: 0 },
  // { jenisPekerjaan: "Pemilik Usaha Hotel dan Penginapan Lainnya", jumlah: 0 },
  // { jenisPekerjaan: "Pemilik Usaha Informasi dan Komunikasi", jumlah: 0 },
  // { jenisPekerjaan: "Perawat Swasta", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Kue", jumlah: 0 },
  // { jenisPekerjaan: "Peternak", jumlah: 0 },
  // { jenisPekerjaan: "Pengusaha Kecil, Menengah dan Besar", jumlah: 0 },
  // { jenisPekerjaan: "Kepala Daerah", jumlah: 0 },
  // { jenisPekerjaan: "Penata Rias", jumlah: 0 },
  // { jenisPekerjaan: "Duta Besar", jumlah: 0 },
  // { jenisPekerjaan: "Dokter", jumlah: 0 },
  // { jenisPekerjaan: "Anggota DPD", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Cukur", jumlah: 0 },
  // {
  //   jenisPekerjaan: "Buruh Usaha Jasa Transportasi dan Perhubungan",
  //   jumlah: 0,
  // },
  // { jenisPekerjaan: "Penyiar Televisi", jumlah: 0 },
  // { jenisPekerjaan: "Paranormal", jumlah: 0 },
  // { jenisPekerjaan: "Jasa Konsultasi Manajemen dan Teknis", jumlah: 0 },
  // { jenisPekerjaan: "Anggota DPRD Provinsi", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Usaha Jasa Hiburan dan Pariwisata", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Sumur", jumlah: 0 },
  // { jenisPekerjaan: "Pembantu Rumah Tangga", jumlah: 0 },
  // { jenisPekerjaan: "Pengacara", jumlah: 0 },
  // { jenisPekerjaan: "Penambang", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Tani/Perkebunan", jumlah: 0 },
  // { jenisPekerjaan: "Anggota BPK", jumlah: 0 },
  // { jenisPekerjaan: "Jasa Pengobatan Alternatif", jumlah: 0 },
  // { jenisPekerjaan: "Penata Busana", jumlah: 0 },
  // { jenisPekerjaan: "Gubernur", jumlah: 0 },
  // { jenisPekerjaan: "Apoteker", jumlah: 0 },
  // {
  //   jenisPekerjaan: "Pemilik Usaha Jasa Transportasi dan Perhubungan",
  //   jumlah: 0,
  // },
  // { jenisPekerjaan: "Penata Rambut", jumlah: 0 },
  // { jenisPekerjaan: "Anggota Kabinet/Kementrian", jumlah: 0 },
  // { jenisPekerjaan: "Anggota DPRD Kabupaten/Kota", jumlah: 0 },
  // { jenisPekerjaan: "Presiden", jumlah: 0 },
  // { jenisPekerjaan: "Pastor", jumlah: 0 },
  // { jenisPekerjaan: "Jasa Penyewaan Peralatan Pesta", jumlah: 0 },
  // { jenisPekerjaan: "Pemeluk Agama", jumlah: 0 },
  // { jenisPekerjaan: "Anggota Legislatif", jumlah: 0 },
  // { jenisPekerjaan: "Pengrajin", jumlah: 0 },
  // { jenisPekerjaan: "Promotor Acara", jumlah: 0 },
  // { jenisPekerjaan: "Konstruksi", jumlah: 0 },
  // { jenisPekerjaan: "Walikota", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Migran", jumlah: 0 },
  // { jenisPekerjaan: "Usaha Jasa Pengerah Tenaga Kerja", jumlah: 0 },
  // { jenisPekerjaan: "Juru Masak", jumlah: 0 },
  // { jenisPekerjaan: "Wakil Presiden", jumlah: 0 },
  // { jenisPekerjaan: "Kontraktor", jumlah: 0 },
  // { jenisPekerjaan: "Bupati", jumlah: 0 },
  // { jenisPekerjaan: "Penyiar Radio", jumlah: 0 },
  // { jenisPekerjaan: "Anggota Mahkamah Konstitusi", jumlah: 0 },
  // { jenisPekerjaan: "Paraji", jumlah: 0 },
  // { jenisPekerjaan: "Pendeta", jumlah: 0 },
  // { jenisPekerjaan: "Seniman", jumlah: 0 },
  // { jenisPekerjaan: "Notaris", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Usaha Jasa Informasi dan Komunikasi", jumlah: 0 },
  // { jenisPekerjaan: "Pemulung", jumlah: 0 },
  // { jenisPekerjaan: "Pengrajin Industri Rumah Tangga", jumlah: 0 },
  // { jenisPekerjaan: "Tabib", jumlah: 0 },
  // { jenisPekerjaan: "Pilot", jumlah: 0 },
  // { jenisPekerjaan: "Biarawati", jumlah: 0 },
  // { jenisPekerjaan: "Satpam/Security", jumlah: 0 },
  // { jenisPekerjaan: "Akuntan", jumlah: 0 },
  // { jenisPekerjaan: "Peneliti", jumlah: 0 },
  // { jenisPekerjaan: "Imam Masjid", jumlah: 0 },
  // { jenisPekerjaan: "Dosen Swasta", jumlah: 0 },
  // { jenisPekerjaan: "Bidan", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Cuci", jumlah: 0 },
  // { jenisPekerjaan: "Dukun Tradisional", jumlah: 0 },
  // { jenisPekerjaan: "Perancang Busana", jumlah: 0 },
  // { jenisPekerjaan: "Anggota DPR-RI", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Listrik", jumlah: 0 },
  // { jenisPekerjaan: "Psikiater/Psikolog", jumlah: 0 },
  // { jenisPekerjaan: "Lainnya", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Usaha Hotel dan Penginapan Lainnya", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Gigi", jumlah: 0 },
  // { jenisPekerjaan: "Arsitek", jumlah: 0 },
  // { jenisPekerjaan: "Pialang", jumlah: 0 },
  // { jenisPekerjaan: "Dokter Swasta", jumlah: 0 },
  // { jenisPekerjaan: "Guru Swasta", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Peternakan", jumlah: 0 },
  // { jenisPekerjaan: "Pemilik Perusahaan", jumlah: 0 },
  // { jenisPekerjaan: "Pengusaha Perdagangan Hasil Bumi", jumlah: 0 },
  // { jenisPekerjaan: "Pedagang Barang Kelontong", jumlah: 0 },
  // { jenisPekerjaan: "Montir", jumlah: 0 },
  // { jenisPekerjaan: "Tidak Mempunyai Pekerjaan Tetap", jumlah: 0 },
  // { jenisPekerjaan: "Wakil Bupati", jumlah: 0 },
  // { jenisPekerjaan: "Buruh Jasa Perdagangan Hasil Bumi", jumlah: 0 },
  // { jenisPekerjaan: "Pedagang Keliling", jumlah: 0 },
  // {
  //   jenisPekerjaan: "Pemilik Usaha Warung, Rumah Makan dan Restoran",
  //   jumlah: 0,
  // },
  // { jenisPekerjaan: "Ahli Pengobatan Alternatif", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Sol Sepatu", jumlah: 0 },
  // { jenisPekerjaan: "Penerjemah", jumlah: 0 },
  // { jenisPekerjaan: "Wakil Gubernur", jumlah: 0 },
  // { jenisPekerjaan: "Tukang Anyaman", jumlah: 0 },
];

export default data;
