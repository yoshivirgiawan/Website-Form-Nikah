import React from 'react';
import TitleForm from '../TitleForm/TitleForm';
import Input from "../Input/Input/Input"
import InputDropdown from "../Input/InputDropdown/InputDropdown";
import InputRadio from "../Input/InputRadio/InputRadio";
import Textarea from "../Input/Textarea/Textarea";
import InputFile from '../Input/InputFile/InputFile';

function N6(props) {
    const {onChangeInput} = props;

    return (
        <div>
            <div className="form-content-header">
                SURAT KETERANGAN KEMATIAN SUAMI/ISTRI
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Nomor surat" 
                />
                <Input 
                    type="text" 
                    id="idNomor" 
                    label="Nomor" 
                    placeholder="Contoh : 01.004/SMA-SM/V/2018" 
                    width="300px" 
                    name="nomorSurat" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.nomorSurat}
                />
                
                <TitleForm 
                    title="Lokasi" 
                />
                <div className="d-flex justify-content-between">
                    <InputDropdown 
                        label="Kantor Desa / Kelurahan" 
                        placeholder="Contoh : Sidoharjo" 
                        width="260px" 
                        data={props.kecamatan} 
                        name="lokasiDesa" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.lokasi.desa}
                    />
                    <InputDropdown 
                        label="Kecamatan" 
                        placeholder="Contoh : Lamongan" 
                        width="260px" 
                        data={props.kecamatan} 
                        name="lokasiKecamatan" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.lokasi.kecamatan}
                    />
                    <InputDropdown 
                        label="Kabupaten / Kota" 
                        placeholder="Contoh : Lamongan" 
                        width="260px" 
                        data={props.kecamatan} 
                        name="lokasiKota" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.lokasi.kota}
                    />
                </div>
                <TitleForm 
                    title="Data diri suami/istri yang meninggal" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="namaPasanganMempelaiMeninggal" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaPasanganMempelaiMeninggal" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.pasanganMeninggal.nama}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="aliasPasanganMempelaiMeninggal" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasPasanganMempelaiMeninggal" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.pasanganMeninggal.alias}
                    />
                </div>
                <Input 
                    type="text" 
                    id="idOrangTuaMempelai" 
                    label="Bin / binti" 
                    placeholder="Contoh : Siti Sumantri" 
                    width="300px" 
                    name="orangTuaPasanganMempelaiMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.orangTua}
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahir" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirPasanganMempelaiMeninggal" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.pasanganMeninggal.tempatLahir}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahir" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirPasanganMempelaiMeninggal" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.pasanganMeninggal.tanggalLahir}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraPasanganMempelaiMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.warganegara}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaPasanganMempelaiMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.agama}
                />
                <InputDropdown 
                    label="Pekerjaan terakhir" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanPasanganMempelaiMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.pekerjaan}
                />
                <Textarea 
                    label="Tempat Tinggal Terakhir" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatPasanganMempelaiMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.alamat}
                />
                <Input 
                    type="date" 
                    id="idTanggalMeninggal" 
                    label="Tanggal Meninggal" 
                    width="300px" 
                    name="tanggalMeninggal" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.pasanganMeninggal.tanggalMeninggal}
                />
                <TitleForm 
                    title="Data diri suami/istri" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idNama" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.nama}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="idAlias" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.alias}
                    />
                </div>
                <Input 
                    type="text" 
                    id="idOrangTuaMempelai" 
                    label="Bin / binti" 
                    placeholder="Contoh : Siti Sumantri" 
                    width="300px" 
                    name="orangTuaMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.orangTua}
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahir" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.tempatLahir}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahir" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.tanggalLahir}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.warganegara}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaMempelai" 
                    dataCheck={props.data.mempelai.agama}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.agama}
                />
                <InputDropdown 
                    label="Pekerjaan" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.pekerjaan}
                />
                <Textarea 
                    label="Tempat Tinggal" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.alamat}
                />
                <TitleForm 
                    title="Waktu, tempat pembuatan surat dan tanda tangan" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatPembuatanSurat" 
                        label="Tempat pembuatan surat" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatPembuatanSurat" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataSurat.tempatPembuatanSurat}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idWaktuPembuatanSurat" 
                        label="Waktu pembuatan surat" 
                        width="300px" 
                        name="waktuPembuatanSurat" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataSurat.waktuPembuatanSurat}
                    />
                </div>
                <Input 
                    type="text" 
                    id="idKepalaDesa" 
                    label="Kepala desa/kelurahan" 
                    placeholder="Contoh : Budi Budiman" 
                    width="300px" 
                    name="kepalaDesaPembuatanSurat" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataSurat.kepalaDesa}
                />
                <InputFile 
                    width="300px" 
                    id="idTandaTanganMempelai" 
                    label="Tanda Tangan" 
                    name="tandaTanganMempelai" 
                    image={props.data.mempelai.tandaTangan}
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.mempelai.tandaTangan}
                />
            </div>
        </div>
    );
}

export default N6;