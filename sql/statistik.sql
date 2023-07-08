cek
select banyak from [db] where judul = [judul] and bulan = [bulan] and tahun = [tahun]

tambah-baru
insert into [db] (judul, banyak, bulan, tahun) values ([judul], [banyak], [bulan], [tahun])

update-dulu
update [db] set banyak = [banyak] where judul = [judul] and bulan = [bulan] and tahun = [tahun]

ambil-terbanyak
select judul, banyak from [db] where bulan = [bulan] and tahun = [tahun]