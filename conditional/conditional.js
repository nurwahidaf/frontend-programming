/**
 * jika nilai di atas 90: A
 * jika nilai di atas 80: B
 * jika nilai di atas 79: C
 * selain itu: D
 */

const nilai = 70;

if (nilai > 90) {
    console.log("Nilai Anda A");
}
else if (nilai > 80) {
    console.log("Nilai Anda B");
}
else if (nilai > 70) {
    console.log("Nilai Anda C");
}
else {
    console.log("Nilai Anda D");
}