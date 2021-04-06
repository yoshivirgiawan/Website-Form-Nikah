import React from 'react';
import TitleForm from '../TitleForm/TitleForm';

function ResultN3(props) {
    return (
        <div>
            <div className="form-content-header">
                Data {props.objects[2].title}
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Data diri calon suami" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama lengkap</th>
                                <td id="phone-val">: {props.data.suami.nama} / {props.data.suami.alias}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.suami.tempatLahir}, {props.data.suami.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.suami.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Agama</th>
                                <td id="location-val">: {props.data.suami.agama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Pekerjaan</th>
                                <td id="location-val">: {props.data.suami.pekerjaan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat Tinggal</th>
                                <td id="location-val">: {props.data.suami.alamat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Data diri calon istri" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama lengkap</th>
                                <td id="phone-val">: {props.data.istri.nama} / {props.data.istri.alias}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat, Tanggal Lahir</th>
                                <td id="location-val">: {props.data.istri.tempatLahir}, {props.data.istri.tanggalLahir}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Warganegara</th>
                                <td id="location-val">: {props.data.istri.warganegara}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Agama</th>
                                <td id="location-val">: {props.data.istri.agama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Pekerjaan</th>
                                <td id="location-val">: {props.data.istri.pekerjaan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tempat Tinggal</th>
                                <td id="location-val">: {props.data.istri.alamat}</td>
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
                                <th>Waktu pembuatan surat</th>
                                <td id="phone-val">: {props.data.dataSurat.waktuPembuatanSurat}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Tanda tangan calon suami</th>
                                <td id="location-val">: <img src={props.data.suami.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                            <tr class="space-row">
                                <th>Tanda tangan calon istri</th>
                                <td id="location-val">: <img src={props.data.istri.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default ResultN3;