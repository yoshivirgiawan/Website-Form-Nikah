import React from 'react';
import TitleForm from '../TitleForm/TitleForm';

function ResultN1(props) {
    return (
        <div>
            <div className="form-content-header">
                Data {props.objects[0].title}
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Nomor Surat" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nomor Surat</th>
                                <td id="fullname-val">: {props.data.nomorSurat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Lokasi" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Kantor Desa / Kelurahan</th>
                                <td id="phone-val">: {props.data.lokasi.desa}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Kecamatan</th>
                                <td id="email-val">: {props.data.lokasi.kecamatan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Kabupaten / Kota</th>
                                <td id="location-val">: {props.data.lokasi.kota}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Data diri" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama lengkap</th>
                                <td id="phone-val">: {props.data.mempelai.nama} / {props.data.mempelai.alias}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Jenis Kelamin</th>
                                <td id="email-val">: {props.data.mempelai.kelamin}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.mempelai.tempatLahir}, {props.data.mempelai.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.mempelai.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Agama</th>
                                <td id="location-val">: {props.data.mempelai.agama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Pekerjaan</th>
                                <td id="location-val">: {props.data.mempelai.pekerjaan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat Tinggal</th>
                                <td id="location-val">: {props.data.mempelai.alamat}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Bin / binti</th>
                                <td id="location-val">: {props.data.mempelai.orangTua}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Status perkawinan</th>
                                <td id="location-val">: 
                                    {
                                        props.data.mempelai.statusPerkawinan === true ? 
                                        (" Sudah pernah menikah")

                                        : ( props.data.mempelai.statusPerkawinan === false ? 
                                            (" Belum pernah menikah")
                                            : null
                                        )
                                    }
                                </td>
                            </tr>
                            {
                                props.data.mempelai.statusPerkawinan === true ? 
                                <div>
                                    <tr class="space-row">
                                        <th>Jumlah istri terdahulu</th>
                                        <td id="location-val">: {props.data.mempelai.jumlahPasanganTerdahulu}</td>
                                    </tr>
                                    <tr class="space-row">
                                        <th>Nama istri terdahulu</th>
                                        <td id="location-val">: {props.data.mempelai.jumlahPasanganTerdahulu.join(" ")}</td>
                                    </tr>
                                </div>

                                : null
                            }
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Waktu, tempat pembuatan surat dan tanda tangan" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Tempat, waktu pembuatan surat</th>
                                <td id="phone-val">: {props.data.dataSurat.tempatPembuatanSurat}, {props.data.dataSurat.waktuPembuatanSurat}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Kepala desa/kelurahan</th>
                                <td id="location-val">: {props.data.dataSurat.kepalaDesa}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tanda Tangan</th>
                                <td id="location-val">: <img src={props.data.mempelai.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default ResultN1;