import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Formcontent from "./components/Formcontent/Formcontent";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        nomorSurat: "",
        lokasi: {
          desa: "",
          kecamatan: "",
          kota: ""
        },
        mempelai: {
          nama: "",
          alias: "",
          kelamin: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          orangTua: "",
          statusPerkawinan: false,
          jumlahPasanganTerdahulu: 0,
          namaPasanganTerdahulu: [], 
          tandaTangan: "",
        },
        ayah: {
          nama: "",
          alias: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          tandaTangan: ""
        },
        ibu: {
          nama: "",
          alias: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          tandaTangan: ""
        },
        pasanganMeninggal: {
          nama: "",
          alias: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          orangTua: "",
          tanggalMeninggal: ""
        },
        suami: {
          nama: "",
          alias: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          tandaTangan: ""
        },
        istri: {
          nama: "",
          alias: "",
          tempatLahir: "",
          tanggalLahir: "",
          warganegara: "",
          agama: "",
          pekerjaan: "",
          alamat: "",
          tandaTangan: ""
        },
        dataPernikahan: {
          jumlahLampiran: 0,
          alamatKUA: "",
          hariPernikahan: "",
          tanggalPernikahan: "",
          jamPernikahan: "",
          masKawin: "",
          tipePembayaranMasKawin: "",
          alamatPernikahan: "",
          daftarLampiran: [],
          tanggalDiterima: "",
          tandaTanganPPN: ""
        },
        dataSurat: {
          tempatPembuatanSurat: "",
          waktuPembuatanSurat: "",
          kepalaDesa: "",
          tandaTanganMempelai: ""
        }
      },
      router: "form",
      activePage: 1,
      objects: [
          { 
            id: 1, 
            tipe: "N-1",
            title: "Surat Keterangan Untuk Nikah" 
          }, 
          { 
            id: 2, 
            tipe: "N-2",
            title: "Surat Keterangan Asal-Usul" 
          }, 
          { 
            id: 3, 
            tipe: "N-3",
            title: "Surat Persetujuan Mempelai" 
          }, 
          { 
            id: 4, 
            tipe: "N-4",
            title: "Surat Keterangan Tentang Orang Tua" 
          }, 
          { 
            id: 5, 
            tipe: "N-5",
            title: "Surat Izin Orang Tua" 
          }, 
          { 
            id: 6, 
            tipe: "N-6",
            title: "Surat Keterangan Kematian Suami/Istri" 
          }, 
          { 
            id: 7, 
            tipe: "N-7",
            title: "Surat Pemberitahuan Kehendak Nikah" 
          }
      ],
      kecamatan: [
        {value: "Benjeng", label: "Benjeng"}, 
        {value: "Lamongan", label: "Lamongan"}, 
        {value: "Waru", label: "Waru"}, 
        {value: "Karang Konang", label: "Karang Konang"}, 
        {value: "Magersari", label: "Magersari"}
      ],
      kelamin: [
        "Laki-Laki",
        "Perempuan"
      ],
      agama: [
        "Islam",
        "Kristen Protestan",
        "Kristen Katolik",
        "Hindu",
        "Budha",
        "Konghuchu"
      ],
      pekerjaan: [
        {value: "Guru", label: "Guru"}, 
        {value: "Dokter", label: "Dokter"}, 
        {value: "Petani", label: "Petani"}, 
        {value: "Programmer", label: "Programmer"}, 
        {value: "Pilot", label: "Pilot"},
        {value: "Nelayan", label: "Nelayan"}
      ]
    }
  }

  logFields = () => {
    console.log(this.state.activePage);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleCounter = () => {
    this.setState(state => {
      return {
        counter: this.state.counter + 1,
      }
    })
  }

  changeActivePage = (page) => {
    this.setState({activePage: page}, 
      () => {this.logFields()}
    );
    this.scrollToTop();
  }

  changeRouter = (router) => {
    this.setState({router: router, activePage: 1}, 
      () => {this.logFields()}
    );
    this.scrollToTop();
  }

  onChangeInput = (stateName, stateValue) => {
    if (stateName === "nomorSurat") {
      this.setState(prevState => ({
        data: {...prevState.data, nomorSurat: stateValue}
      }));
    }
    else if (stateName === "lokasiDesa") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          lokasi : {
            ...prevState.data.lokasi, 
            desa: stateValue
          }
        }
      }));
    }
    else if (stateName === "lokasiKecamatan") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          lokasi : {
            ...prevState.data.lokasi, 
            kecamatan: stateValue
          }
        }
      }));
    }
    else if (stateName === "lokasiKota") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          lokasi : {
            ...prevState.data.lokasi, 
            kota: stateValue
          }
        }
      }));
    }
    else if (stateName === "namaMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            nama: stateValue
          }
        }
      }));
    }
    else if (stateName === "aliasMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            alias: stateValue
          }
        }
      }));
    }
    else if (stateName === "kelaminMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            kelamin: stateValue
          }
        }
      }));
    }
    else if (stateName === "tempatLahirMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            tempatLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalLahirMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            tanggalLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "warganegaraMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            warganegara: stateValue
          }
        }
      }));
    }
    else if (stateName === "agamaMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            agama: stateValue
          }
        }
      }));
    }
    else if (stateName === "pekerjaanMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            pekerjaan: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            alamat: stateValue
          }
        }
      }));
    }
    else if (stateName === "orangTuaMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            orangTua: stateValue
          }
        }
      }));
    }
    else if (stateName === "statusPerkawinanMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            statusPerkawinan: stateValue
          }
        }
      }));
    }
    else if (stateName === "jumlahPasanganTerdahuluMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            jumlahPasanganTerdahulu: stateValue
          }
        }
      }));
    }
    else if (stateName === "namaPasanganTerdahuluMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            namaPasanganTerdahulu: stateValue.split(/\s*,\s*/)
          }
        }
      }));
    }
    else if (stateName === "tempatPembuatanSurat") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataSurat: {
            ...prevState.data.dataSurat, 
            tempatPembuatanSurat: stateValue
          }
        }
      }));
    }
    else if (stateName === "waktuPembuatanSurat") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataSurat: {
            ...prevState.data.dataSurat, 
            waktuPembuatanSurat: stateValue
          }
        }
      }));
    }
    else if (stateName === "kepalaDesaPembuatanSurat") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataSurat: {
            ...prevState.data.dataSurat, 
            kepalaDesa: stateValue
          }
        }
      }));
    }
    else if (stateName === "tandaTanganMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          mempelai: {
            ...prevState.data.mempelai, 
            tandaTangan: stateValue
          }
        }
      }));
    }
    else if (stateName === "namaAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            nama: stateValue
          }
        }
      }));
    }
    else if (stateName === "aliasAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            alias: stateValue
          }
        }
      }));
    }
    else if (stateName === "tempatLahirAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            tempatLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalLahirAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            tanggalLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "warganegaraAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            warganegara: stateValue
          }
        }
      }));
    }
    else if (stateName === "agamaAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            agama: stateValue
          }
        }
      }));
    }
    else if (stateName === "pekerjaanAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            pekerjaan: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            alamat: stateValue
          }
        }
      }));
    }
    else if (stateName === "tandaTanganAyahMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ayah: {
            ...prevState.data.ayah, 
            tandaTangan: stateValue
          }
        }
      }));
    }
    else if (stateName === "namaIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            nama: stateValue
          }
        }
      }));
    }
    else if (stateName === "aliasIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            alias: stateValue
          }
        }
      }));
    }
    else if (stateName === "tempatLahirIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            tempatLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalLahirIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            tanggalLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "warganegaraIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            warganegara: stateValue
          }
        }
      }));
    }
    else if (stateName === "agamaIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            agama: stateValue
          }
        }
      }));
    }
    else if (stateName === "pekerjaanIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            pekerjaan: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            alamat: stateValue
          }
        }
      }));
    }
    else if (stateName === "tandaTanganIbuMempelai") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          ibu: {
            ...prevState.data.ibu, 
            tandaTangan: stateValue
          }
        }
      }));
    }
    else if (stateName === "namaSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            nama: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              nama: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "aliasSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            alias: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              alias: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tempatLahirSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            tempatLahir: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tempatLahir: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tanggalLahirSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            tanggalLahir: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tanggalLahir: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "warganegaraSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            warganegara: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              warganegara: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "agamaSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            agama: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              agama: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "pekerjaanSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            pekerjaan: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              pekerjaan: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "alamatSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            alamat: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              alamat: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tandaTanganSuami") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          suami: {
            ...prevState.data.suami, 
            tandaTangan: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Laki-Laki") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tandaTangan: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "namaIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            nama: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              nama: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "aliasIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            alias: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              alias: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tempatLahirIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            tempatLahir: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tempatLahir: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tanggalLahirIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            tanggalLahir: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tanggalLahir: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "warganegaraIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            warganegara: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              warganegara: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "agamaIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            agama: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              agama: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "pekerjaanIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            pekerjaan: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              pekerjaan: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "alamatIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            alamat: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              alamat: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "tandaTanganIstri") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          istri: {
            ...prevState.data.istri, 
            tandaTangan: stateValue
          }
        }
      }));
      if (this.state.data.mempelai.kelamin === "Perempuan") {
        this.setState(prevState => ({
          data: {...prevState.data, 
            mempelai: {
              ...prevState.data.mempelai, 
              tandaTangan: stateValue
            }
          }
        }));
      }
    }
    else if (stateName === "namaPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            nama: stateValue
          }
        }
      }));
    }
    else if (stateName === "aliasPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            alias: stateValue
          }
        }
      }));
    }
    else if (stateName === "orangTuaPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            orangTua: stateValue
          }
        }
      }));
    }
    else if (stateName === "tempatLahirPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            tempatLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalLahirPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            tanggalLahir: stateValue
          }
        }
      }));
    }
    else if (stateName === "warganegaraPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            warganegara: stateValue
          }
        }
      }));
    }
    else if (stateName === "agamaPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            agama: stateValue
          }
        }
      }));
    }
    else if (stateName === "pekerjaanPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            pekerjaan: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatPasanganMempelaiMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            alamat: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalMeninggal") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          pasanganMeninggal: {
            ...prevState.data.pasanganMeninggal, 
            tanggalMeninggal: stateValue
          }
        }
      }));
    }
    else if (stateName === "waktuPembuatanSurat") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataSurat: {
            ...prevState.data.dataSurat, 
            waktuPembuatanSurat: stateValue
          }
        }
      }));
    }
    else if (stateName === "jumlahLampiran") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            jumlahLampiran: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatKUA") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            alamatKUA: stateValue
          }
        }
      }));
    }
    else if (stateName === "hariPernikahan") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            hariPernikahan: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalPernikahan") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            tanggalPernikahan: stateValue
          }
        }
      }));
    }
    else if (stateName === "jamPernikahan") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            jamPernikahan: stateValue
          }
        }
      }));
    }
    else if (stateName === "masKawin") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            masKawin: stateValue
          }
        }
      }));
    }
    else if (stateName === "tipePembayaranMasKawin") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            tipePembayaranMasKawin: stateValue
          }
        }
      }));
    }
    else if (stateName === "alamatPernikahan") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            alamatPernikahan: stateValue
          }
        }
      }));
    }
    else if (stateName === "tanggalDiterima") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            tanggalDiterima: stateValue
          }
        }
      }));
    }
    else if (stateName === "daftarLampiran") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            daftarLampiran: stateValue
          }
        }
      }));
    }
    // else if (stateName.includes("namaLampiran")) {
    //   this.setState(prevState => ({
    //     data: {...prevState.data, 
    //       dataPernikahan: {
    //         ...prevState.data.dataPernikahan, 
    //         daftarLampiran: stateValue
    //         // {
    //         //   ...prevState.data.dataPernikahan.daftarLampiran[0],
    //         //   namaSurat: stateValue 
    //         // }
    //       }
    //     }
    //   }));
    // }
    else if (stateName.includes("modelLampiran")) {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            daftarLampiran: stateValue
            // {
            //   ...prevState.data.dataPernikahan.daftarLampiran[0],
            //   model: stateValue 
            // }
          }
        }
      }));
    }
    else if (stateName === "tandaTanganPPN") {
      this.setState(prevState => ({
        data: {...prevState.data, 
          dataPernikahan: {
            ...prevState.data.dataPernikahan, 
            tandaTanganPPN: stateValue
          }
        }
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          objects={this.state} 
          changeActivePage={this.changeActivePage}
          data={this.state.data}
        />
        <Formcontent 
          objects={this.state.objects}
          kecamatan={this.state.kecamatan}
          kelamin={this.state.kelamin}
          agama={this.state.agama}
          pekerjaan={this.state.pekerjaan}
          router={this.state.router}
          activePage={this.state.activePage}
          data={this.state.data}
          changeActivePage={this.changeActivePage}
          onChangeInput={this.onChangeInput}
          changeRouter={this.changeRouter}
        />
      </div>
    );
  }
}

export default App;
