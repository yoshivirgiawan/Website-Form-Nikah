import React from 'react';
import TitleForm from '../TitleForm/TitleForm';

function ResultN5(props) {
    return (
        <div>
            <div className="form-content-header">
                Data {props.objects[4].title}
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Data diri ayah kandung" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama lengkap</th>
                                <td id="phone-val">: {props.data.ayah.nama} / {props.data.ayah.alias}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.ayah.tempatLahir}, {props.data.ayah.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.ayah.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Agama</th>
                                <td id="location-val">: {props.data.ayah.agama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Pekerjaan</th>
                                <td id="location-val">: {props.data.ayah.pekerjaan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat Tinggal</th>
                                <td id="location-val">: {props.data.ayah.alamat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Data diri ibu kandung" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama lengkap</th>
                                <td id="phone-val">: {props.data.ibu.nama} / {props.data.ibu.alias}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.ibu.tempatLahir}, {props.data.ibu.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.ibu.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Agama</th>
                                <td id="location-val">: {props.data.ibu.agama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Pekerjaan</th>
                                <td id="location-val">: {props.data.ibu.pekerjaan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat Tinggal</th>
                                <td id="location-val">: {props.data.ibu.alamat}</td>
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
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.mempelai.tempatLahir}, {props.data.mempelai.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.mempelai.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Jenis Kelamin</th>
                                <td id="location-val">: {props.data.mempelai.kelamin}</td>
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
                                <th>Tanda tangan ayah</th>
                                <td id="location-val">: <img src={props.data.ayah.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                            <tr class="space-row">
                                <th>Tanda tangan ibu</th>
                                <td id="location-val">: <img src={props.data.ibu.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default ResultN5;