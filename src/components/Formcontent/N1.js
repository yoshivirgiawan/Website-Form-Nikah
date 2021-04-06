import React from 'react';
import TitleForm from '../TitleForm/TitleForm';
import Input from "../Input/Input/Input"
import InputDropdown from "../Input/InputDropdown/InputDropdown";
import InputRadio from "../Input/InputRadio/InputRadio";
import Textarea from "../Input/Textarea/Textarea";
import InputFile from '../Input/InputFile/InputFile';
import SwitchButton from '../Input/SwitchButton/SwitchButton';

function N1(props) {
    const {onChangeInput} = props;

    return (
        <div>
            <div className="form-content-header">
                Surat Keterangan Untuk Nikah
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Nomor Surat" 
                />
                <Input 
                    type="text" 
                    id="nomorSurat" 
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
                    title="Data diri" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="namaMempelai" 
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
                        id="aliasMempelai" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasMempelai" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.alias}
                    />
                </div>
                <InputRadio 
                    label="Jenis Kelamin" 
                    width="100%" 
                    data={props.kelamin} 
                    name="kelaminMempelai" 
                    dataCheck={props.data.mempelai.kelamin}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin}
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="tempatLahirMempelai" 
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
                        id="tanggalLahirMempelai" 
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
                <Input 
                    type="text" 
                    id="orangTuaMempelai" 
                    label="Bin / binti" 
                    placeholder="Contoh : Siti Sumantri" 
                    width="300px" 
                    name="orangTuaMempelai" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.orangTua}
                />
                <SwitchButton 
                    label= "Sudah pernah menikah?"
                    statusPerkawinan={props.data.mempelai.statusPerkawinan}
                    name="statusPerkawinanMempelai" 
                    onChangeInput={onChangeInput}
                />
                {
                    props.data.mempelai.statusPerkawinan ? 
                    <div>
                        <Input 
                            type="number" 
                            id="jumlahPasanganTerdahuluMempelai" 
                            label="Jumlah istri terdahulu" 
                            placeholder="Contoh : 2" 
                            width="300px" 
                            name="jumlahPasanganTerdahuluMempelai" 
                            onChangeInput={onChangeInput}
                            defaultValue={props.data.mempelai.jumlahPasanganTerdahulu}
                        />
                        <Input 
                            type="text" 
                            id="namaPasanganTerdahuluMempelai" 
                            label="Nama istri/suami terdahulu" 
                            placeholder="Contoh : Budi Budiman, Andi" 
                            width="300px" 
                            name="namaPasanganTerdahuluMempelai" 
                            onChangeInput={onChangeInput} 
                            defaultValue={props.data.mempelai.namaPasanganTerdahulu}
                        />
                    </div>
                    : null
                }
                
                <TitleForm 
                    title="Waktu, tempat pembuatan surat dan tanda tangan" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="tempatPembuatanSurat" 
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
                        id="waktuPembuatanSurat" 
                        label="Waktu pembuatan surat" 
                        width="300px" 
                        name="waktuPembuatanSurat" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataSurat.waktuPembuatanSurat}
                    />
                </div>
                <Input 
                    type="text" 
                    id="kepalaDesaPembuatanSurat" 
                    label="Kepala desa/kelurahan" 
                    placeholder="Contoh : Budi Budiman" 
                    width="300px" 
                    name="kepalaDesaPembuatanSurat" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataSurat.kepalaDesa}
                />
                <InputFile 
                    width="300px" 
                    id="tandaTanganMempelai" 
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

export default N1;