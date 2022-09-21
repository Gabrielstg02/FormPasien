let nama = document.getElementById("name");
let birthPlace = document.getElementById("tl");
let birthDate = document.getElementById("tgl");
let gender = document.getElementById("jk");
let address = document.getElementById("alamat");
let rt = document.getElementById("rt");
let rw = document.getElementById("rw");
let province = document.getElementById("provinsi");
let district = document.getElementById("kecamatan");
let subDistrict = document.getElementById("desa");
let phone = document.getElementById("hp");
let postalCode = document.getElementById("kodepos");
let religion = document.getElementById("agama");
let education = document.getElementById("pendidikan");
let job = document.getElementById("pekerjaan");

let relation = document.getElementById("relasipj");
let namePj = document.getElementById("namapj");
let educationPj = document.getElementById("pendidikanpj");
let jobPj = document.getElementById("pekerjaanpj")
let signature = document.getElementById("ttd");

let nameWarn = document.getElementById("nameWarn");
let birthPlaceWarn = document.getElementById("tlWarn");
let birthDateWarn = document.getElementById("tglWarn");
let genderWarn = document.getElementById("jkWarn");
let addressWarn = document.getElementById("alamatWarn");
let rtWarn = document.getElementById("rtWarn");
let rwWarn = document.getElementById("rwWarn");
let provinceWarn = document.getElementById("provinsiWarn");
let districtWarn = document.getElementById("kecamatanWarn");
let subDistrictWarn = document.getElementById("desaWarn");
let phoneWarn = document.getElementById("hpWarn");
let postalCodeWarn = document.getElementById("kodePosWarn");
let religionWarn = document.getElementById("agamaWarn");
let educationWarn = document.getElementById("pendidikanWarn");
let jobWarn = document.getElementById("pekerjaanWarn");

let relationWarn = document.getElementById("relasiPjWarn");
let namePjWarn = document.getElementById("namaPjWarn");
let educationPjWarn = document.getElementById("pendidikanPjWarn");
let jobPjWarn = document.getElementById("pekerjaanPjWarn");
let signatureWarn = document.getElementById("ttdPjWarn");

nameWarn.style.display = "none";
birthPlaceWarn.style.display = "none";
birthDateWarn.style.display = "none";
genderWarn.style.display = "none";
addressWarn.style.display = "none";
rtWarn.style.display = "none";
rwWarn.style.display = "none";
provinceWarn.style.display = "none";
districtWarn.style.display = "none";
subDistrictWarn.style.display = "none";
phoneWarn.style.display = "none";
postalCodeWarn.style.display = "none";
religionWarn.style.display = "none";
educationWarn.style.display = "none";
jobWarn.style.display = "none";

relationWarn.style.display = "none";
namePjWarn.style.display = "none";
educationPjWarn.style.display = "none";
jobPjWarn.style.display = "none";
signatureWarn.style.display = "none";

function submit() {
    if (nama.value != "" && birthDate.value != "" && birthPlace != "" && gender.value != "" && address.value != "" && rt.value != "" && rw.value != "" && province.value !="" && district.value != "" && subDistrict.value != "" && phone.value != "" && postalCode.value != "" && religion.value != "" && education.value != "" && job.value && relation.value != "" && namePj.value != "" && educationPj.value != "" && signature.value != ""){
        localStorage.setItem("nama", nama.value);
        localStorage.setItem("tempatLahir", birthPlace.value);
        localStorage.setItem("tanggalLahir", birthDate.value);
        localStorage.setItem("jenisKelamin", gender.value);
        localStorage.setItem("alamat", address.value);
        localStorage.setItem("rt", rt.value);
        localStorage.setItem("rw", rw.value);
        localStorage.setItem("provinsi", province.value);
        localStorage.setItem("kecamatan", district.value);
        localStorage.setItem("kelurahan/desa", subDistrict.value);
        localStorage.setItem("noHp", phone.value);
        localStorage.setItem("kodePos", postalCode.value);
        localStorage.setItem("agama", religion.value);
        localStorage.setItem("pendidikanTerakhir", education.value);
        localStorage.setItem("pekerjaan", job.value);
        localStorage.setItem("hubunganPjawab", relation.value);
        localStorage.setItem("namaPjawab", namePj.value);
        localStorage.setItem("pendidikanTerakhirPjawab", educationPj.value);
        localStorage.setItem("pekerjaanPjawab", jobPj.value);
        localStorage.setItem("tandaTangan", signature.value);
        
        window.alert("Berhasil Mengisi Data");
    } 
    if(nama.value == ""){
        nameWarn.style.display = "block";
    }
    if(birthPlace.value == ""){
        birthPlaceWarn.style.display = "block";
    }
    if(birthDate.value == ""){
        birthDateWarn.style.display = "block";
    }
    if(gender.value == ""){
        genderWarn.style.display = "block";
    }
    if(address.value == ""){
        addressWarn.style.display = "block";
    }
    if(rt.value == ""){
        rtWarn.style.display = "block";
    }
    if(rw.value == ""){
        rwWarn.style.display = "block";
    }
    if(province.value == ""){
        provinceWarn.style.display = "block";
    }
    if(district.value == ""){
        subDistrictWarn.style.display = "block";
    }
    if(subDistrict.value == ""){
        subDistrictWarn.style.display = "block";
    }
    if(phone.value == ""){
        phoneWarn.style.display = "block";
    }
    if(postalCode.value == ""){
        postalCodeWarn.style.display = "block";
    }
    if(religion.value == ""){
        religionWarn.style.display = "block";
    }
    if(education.value == ""){
        educationWarn.style.display = "block";
    }
    if(job.value == ""){
        jobWarn.style.display = "block";
    }
    if(relation.value == ""){
        relationWarn.style.display = "block";
    }
    if(namePj.value == ""){
        namePjWarn.style.display = "block";
    }
    if(educationPj.value == ""){
        educationPjWarn.style.display = "block";
    }
    if(jobPj.value == ""){
        jobPjWarn.style.display = "block";
    }
    if(signature.value == ""){
        signatureWarn.style.display = "block";
    }
}