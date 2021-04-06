import React, { useEffect } from 'react';
import TitleForm from '../TitleForm/TitleForm';
import Input from "../Input/Input/Input"
import InputDropdown from "../Input/InputDropdown/InputDropdown";
import InputRadio from "../Input/InputRadio/InputRadio";
import Textarea from "../Input/Textarea/Textarea";
import InputFile from '../Input/InputFile/InputFile';

function N3(props) {
    const {onChangeInput} = props;

    useEffect(() => {
        if (props.data.mempelai.kelamin === "Laki-Laki") {
            onChangeInput("tandaTanganSuami", props.data.mempelai.tandaTangan);
            onChangeInput("agamaSuami", props.data.mempelai.agama);
        } else if (props.data.mempelai.kelamin === "Perempuan") {
            onChangeInput("tandaTanganIstri", props.data.mempelai.tandaTangan);
            onChangeInput("agamaIstri", props.data.mempelai.agama);
        }
        
        return (
            null
        )
    }, [onChangeInput, props.data.mempelai.agama, props.data.mempelai.kelamin, props.data.mempelai.tandaTangan]);
    

    return (
        <div>
            <div className="form-content-header">
                SURAT PERSETUJUAN MEMPELAI
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Data diri calon suami" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idNama" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaSuami" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.nama : ""}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="idAlias" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasSuami" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.alias : ""}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahir" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirSuami" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.tempatLahir : ""}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahir" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirSuami" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.tanggalLahir : ""}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraSuami" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.warganegara : ""}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaSuami" 
                    dataCheck={props.data.suami.agama}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.agama : ""}
                />
                <InputDropdown 
                    label="Pekerjaan" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanSuami" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.pekerjaan : ""}
                />
                <Textarea 
                    label="Tempat Tinggal" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatSuami" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.alamat : ""}
                />
                <TitleForm 
                    title="Data diri calon istri" 
                />
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idNamaAyah" 
                        label="Nama lengkap" 
                        placeholder="Contoh : Achmed Yoshi Virgiawan" 
                        width="100%" 
                        name="namaIstri" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.nama : ""}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">/</div>
                    <Input 
                        type="text" 
                        id="idAliasAyah" 
                        label="Alias" 
                        placeholder="Contoh : Yoshi" 
                        width="300px" 
                        name="aliasIstri" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.nama : ""}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <Input 
                        type="text" 
                        id="idTempatLahirAyah" 
                        label="Tempat Lahir" 
                        placeholder="Contoh : Lamongan" 
                        width="100%" 
                        name="tempatLahirIstri" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.tempatLahir : ""}
                    />
                    <div className="margin-bottom-38 mx-3 h-100">,</div>
                    <Input 
                        type="date" 
                        id="idTanggalLahirAyah" 
                        label="Tanggal Lahir" 
                        width="300px" 
                        name="tanggalLahirIstri" 
                        onChangeInput={onChangeInput}
                        defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.tanggalLahir : ""}
                    />
                </div>
                <InputDropdown 
                    label="Warganegara" 
                    placeholder="Contoh : Indonesia" 
                    width="300px" 
                    data={props.kecamatan} 
                    name="warganegaraIstri" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.warganegara : ""}
                />
                <InputRadio 
                    label="Agama" 
                    width="100%" 
                    data={props.agama} 
                    name="agamaIstri" 
                    dataCheck={props.data.istri.agama}
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.agama : ""}
                />
                <InputDropdown 
                    label="Pekerjaan" 
                    placeholder="Contoh : Guru" 
                    width="300px" 
                    data={props.pekerjaan} 
                    name="pekerjaanIstri" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.pekerjaan : ""}
                />
                <Textarea 
                    label="Tempat Tinggal" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatIstri" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Perempuan" ? props.data.mempelai.alamat : ""}
                />
                <TitleForm 
                    title="Waktu pembuatan surat dan tanda tangan" 
                />
                <Input 
                    type="date" 
                    id="idWaktuPembuatanSurat" 
                    label="Waktu pembuatan surat" 
                    width="300px" 
                    name="waktuPembuatanSurat" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataSurat.waktuPembuatanSurat}
                />
                <InputFile 
                    width="300px" 
                    id="idTandaTanganMempelaiPria" 
                    label="Tanda tangan calon suami" 
                    name="tandaTanganSuami" 
                    image={props.data.suami.tandaTangan}
                    onChangeInput={onChangeInput} 
                />
                <InputFile 
                    width="300px" 
                    id="idTandaTanganMempelaiWanita" 
                    label="Tanda tangan calon istri" 
                    name="tandaTanganIstri" 
                    image={props.data.istri.tandaTangan}
                    onChangeInput={onChangeInput} 
                />
            </div>
        </div>
    );
}

export default N3;