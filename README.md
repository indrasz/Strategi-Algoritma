Kesimpulan Mengenai Hasil Eksekusi Program
Dari hasil eksekusi program yang ditampilkan, dapat disimpulkan beberapa poin penting mengenai kinerja dan hasil dari algoritma yang diterapkan untuk optimasi pemetaan genom menggunakan pendekatan divide & conquer dan dynamic programming:

Divide & Conquer:

Pembagian Sekuens: Algoritma divide & conquer berhasil membagi sekuens DNA menjadi potongan-potongan lebih kecil. Dalam contoh di atas, sekuens "ACTGACGT" berhasil dibagi menjadi delapan potongan individu: ['A', 'C', 'T', 'G', 'A', 'C', 'G', 'T'].
Granularitas: Pembagian ini terlalu granular (setiap karakter dipisahkan). Dalam praktiknya, pembagian mungkin lebih efektif jika dilakukan pada segmen yang lebih besar untuk mengurangi jumlah alignment yang perlu dihitung.
Dynamic Programming:

Alignment Optimal: Algoritma Needleman-Wunsch menghasilkan alignment optimal antara potongan-potongan sekuens DNA. Setiap pasangan alignment diproses, dan skor alignment dihitung.
Skor Alignment: Skor yang dihasilkan berkisar dari -1 hingga 1, di mana skor 1 menunjukkan kesesuaian sempurna antara dua karakter, dan skor -1 menunjukkan mismatch.
Efisiensi dan Skalabilitas:

Banyak Perhitungan: Karena sekuens dibagi menjadi unit yang sangat kecil, jumlah perhitungan alignment meningkat drastis. Setiap karakter dibandingkan dengan setiap karakter dari sekuens lainnya.
Potensi Optimasi: Dengan mengurangi granularitas pembagian sekuens (misalnya, membagi menjadi segmen 2-3 karakter), jumlah perhitungan dapat dikurangi dan efisiensi algoritma ditingkatkan.
Kesalahan Potensial:

Overhead Eksekusi: Pembagian yang terlalu kecil menyebabkan overhead eksekusi yang tinggi, mengurangi efisiensi keseluruhan.
Penanganan Gap: Algoritma perlu penanganan yang lebih cermat untuk gap dalam sekuens yang lebih besar, yang tidak terlalu diperhatikan dalam contoh granularitas kecil.
Hasil Alignment:

Pola dan Konsistensi: Hasil alignment menunjukkan pola yang konsisten di mana pasangan karakter dengan kesesuaian menghasilkan skor positif, sedangkan pasangan dengan mismatch menghasilkan skor negatif.
Gabungan Alignment: Beberapa alignment menunjukkan hasil yang serupa karena kesamaan karakter dalam sekuens yang lebih besar.
Saran Perbaikan
Untuk meningkatkan kinerja dan hasil dari algoritma ini, beberapa langkah perbaikan yang bisa diambil meliputi:

Pengaturan Granularitas: Memperbaiki tingkat granularitas dalam pembagian sekuens sehingga tidak terlalu kecil, misalnya membagi menjadi segmen 2-3 karakter.
Optimasi Dynamic Programming: Mengimplementasikan optimasi dalam algoritma dynamic programming untuk menangani submasalah yang lebih besar secara lebih efisien.
Parallel Processing: Memanfaatkan pemrosesan paralel untuk mempercepat perhitungan alignment pada submasalah yang terpisah.
Secara keseluruhan, pendekatan menggunakan divide & conquer dan dynamic programming ini menunjukkan hasil yang menjanjikan untuk optimasi pemetaan genom, namun memerlukan beberapa perbaikan dalam implementasinya untuk mencapai efisiensi yang lebih baik.