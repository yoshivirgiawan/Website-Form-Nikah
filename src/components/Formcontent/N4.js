import React from 'react';
import TitleForm from '../TitleForm/TitleForm';
import Input from "../Input/Input/Input"
import InputDropdown from "../Input/InputDropdown/InputDropdown";
import InputRadio from "../Input/InputRadio/InputRadio";
import Textarea from "../Input/Textarea/Textarea";
import InputFile from '../Input/InputFile/InputFile';

function N4(props) {
    const {onChangeInput} = props;

    return (
        <div>
            <div className="form-content-header">
                SURAT KETERANGAN TENTANG ORANG TUA
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
                    title="Data diri ayah kandung" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idNama" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaAyahMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ayah.nama}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="idAlias" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasAyahMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ayah.alias}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahir" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirAyahMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ayah.tempatLahir}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahir" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirAyahMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ayah.tanggalLahir}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraAyahMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ayah.warganegara}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaAyahMempelai" 
                    dataCheck={props.data.ayah.agama}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ayah.agama}
                />
                <InputDropdown 
                    label="Pekerjaan" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanAyahMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ayah.pekerjaan}
                />
                <Textarea 
                    label="Tempat Tinggal" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatAyahMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ayah.alamat}
                />
                <TitleForm 
                    title="Data diri ibu kandung" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idNama" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaIbuMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ibu.nama}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="idAlias" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasIbuMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ibu.alias}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahir" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirIbuMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ibu.tempatLahir}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahir" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirIbuMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.ibu.tanggalLahir}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraIbuMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ibu.warganegara}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaIbuMempelai" 
                    dataCheck={props.data.ibu.agama}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ibu.agama}
                />
                <InputDropdown 
                    label="Pekerjaan" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanIbuMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ibu.pekerjaan}
                />
                <Textarea 
                    label="Tempat Tinggal" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatIbuMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.ibu.alamat}
                />
                <TitleForm 
                    title="Data diri" 
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
                    label="Jenis Kelamin" 
                    width="100%" 
                    data={props.kelamin} 
                    name="kelaminMempelai" 
                    dataCheck={props.data.mempelai.kelamin}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin}
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

export default N4;