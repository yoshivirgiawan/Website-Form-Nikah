import React from 'react';
import TitleForm from '../TitleForm/TitleForm';
import Input from "../Input/Input/Input"
import MultiInput from "../Input/MultiInput/MultiInput";
import Textarea from "../Input/Textarea/Textarea";
import InputFile from '../Input/InputFile/InputFile';

function N7(props) {
    const {onChangeInput} = props;

    return (
        <div>
            <div className="form-content-header">
                SURAT PEMBERITAHUAN KEHENDAK NIKAH
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Tanggal Pembuatan Surat" 
                />
                <Input 
                    type="date" 
                    id="idTanggalLahir" 
                    label="Tanggal" 
                    width="300px" 
                    name="waktuPembuatanSurat" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataSurat.waktuPembuatanSurat}
                />
                
                <TitleForm 
                    title="Jumlah Lampiran" 
                />
                <Input 
                    type="number" 
                    id="idLampiran" 
                    label="Jumlah" 
                    placeholder="Contoh : 6" 
                    width="300px" 
                    name="jumlahLampiran" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.jumlahLampiran}
                />

                <TitleForm 
                    title="Tempat KUA" 
                />
                <Textarea 
                    type="text" 
                    id="idAlamatKUA" 
                    label="Alamat KUA" 
                    placeholder="Contoh : Lamongan" 
                    width="300px" 
                    name="alamatKUA" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.alamatKUA}
                />

                <TitleForm 
                    title="Data Pernikahan" 
                />
                <Input 
                    type="text" 
                    id="namaSuami" 
                    label="Nama Calon Suami" 
                    placeholder="Contoh : Budi Santoso" 
                    width="300px" 
                    name="namaSuami" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.mempelai.kelamin === "Laki-Laki" ? props.data.mempelai.nama : ""}
                />
                <Input 
                    type="text" 
                    id="namaIstri" 
                    label="Nama Calon Istri" 
                    placeholder="Contoh : Siti" 
                    width="300px" 
                    name="namaIstri" 
                    onChangeInput={onChangeInput}
                    defaultValue={props.data.istri.nama}
                />
                <div className="d-flex justify-content-between">
                    <Input 
                        type="text" 
                        id="idHariPernikahan" 
                        label="Hari" 
                        placeholder="Contoh : Senin" 
                        width="260px" 
                        name="hariPernikahan" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataPernikahan.hariPernikahan}
                    />
                    <Input 
                        type="date" 
                        id="idTanggalPernikahan" 
                        label="Tanggal" 
                        width="260px" 
                        name="tanggalPernikahan" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataPernikahan.tanggalPernikahan}
                    />
                    <Input 
                        type="text" 
                        id="idJamPernikahan" 
                        label="Jam" 
                        placeholder="Contoh : 10:00" 
                        width="260px" 
                        name="jamPernikahan" 
                        onChangeInput={onChangeInput} 
                        defaultValue={props.data.dataPernikahan.jamPernikahan}
                    />
                </div>
                <Input 
                    type="text" 
                    id="idMasKawin" 
                    label="Mas Kawin" 
                    placeholder="Contoh : Seperangkat alat sholat" 
                    width="300px" 
                    name="masKawin" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.masKawin}
                />
                <Input 
                    type="text" 
                    id="idTipePembayaranMasKawin" 
                    label="Tipe Pembayaran Mas Kawin" 
                    placeholder="Contoh : Tunai" 
                    width="300px" 
                    name="tipePembayaranMasKawin" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.tipePembayaranMasKawin}
                />
                <Textarea 
                    label="Alamat Tempat Pernikahan" 
                    placeholder="Contoh : Salembaran Jaya RT 3/RW 4" 
                    width="300px" 
                    name="alamatPernikahan" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.alamatPernikahan}
                />
                
                {
                    props.data.dataPernikahan.jumlahLampiran !== 0 ?
                        <MultiInput 
                            type="text" 
                            id="idTipePembayaranMasKawin" 
                            label="Daftar lampiran" 
                            placeholder={["Contoh : Surat Keterangan Untuk Nikah", "Contoh : N1"]} 
                            nameID={["namaLampiran", "modelLampiran"]}
                            name="daftarLampiran"
                            count = {props.data.dataPernikahan.jumlahLampiran}
                            width="300px" 
                            onChangeInput={onChangeInput} 
                        />
                    : null
                }
                

                <Input 
                    type="date" 
                    id="idTanggalDiterima" 
                    label="Tanggal Diterima" 
                    width="300px" 
                    name="tanggalDiterima" 
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.tanggalDiterima}
                />
                <TitleForm 
                    title="Tanda Tangan" 
                />
                <InputFile 
                    width="300px" 
                    id="idTandaTanganMempelai" 
                    label="Tanda tangan PPN/Pembantu PPN" 
                    name="tandaTanganPPN" 
                    image={props.data.dataPernikahan.tandaTanganPPN}
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.dataPernikahan.tandaTanganPPN}
                />
                <InputFile 
                    width="300px" 
                    id="idTandaTanganMempelai" 
                    label="Tanda tangan calon mempelai/wali" 
                    name="tandaTanganMempelai" 
                    image={props.data.mempelai.tandaTangan}
                    onChangeInput={onChangeInput} 
                    defaultValue={props.data.mempelai.tandaTangan}
                />
            </div>
        </div>
    );
}

export default N7;