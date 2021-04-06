import React from 'react';
import TitleForm from '../TitleForm/TitleForm';

function ResultN7(props) {
    return (
        <div>
            <div className="form-content-header">
                Data {props.objects[6].title}
            </div>
            <div className="form-main-content">
                <TitleForm 
                    title="Tanggal pembuatan surat" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Tanggal</th>
                                <td id="fullname-val">: {props.data.dataSurat.waktuPembuatanSurat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Jumlah lampiran" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Tanggal</th>
                                <td id="fullname-val">: {props.data.dataPernikahan.jumlahLampiran}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Tempat KUA" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Alamat KUA</th>
                                <td id="fullname-val">: {props.data.dataPernikahan.alamatKUA}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <TitleForm 
                    title="Data pernikahan" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Nama calon suami</th>
                                <td id="phone-val">: {props.data.suami.nama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Nama calon istri</th>
                                <td id="location-val">: {props.data.istri.nama}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Hari pernikahan</th>
                                <td id="location-val">: {props.data.dataPernikahan.hariPernikahan}, {props.data.dataPernikahan.tanggalPernikahan}, {props.data.dataPernikahan.jamPernikahan}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Mas Kawin</th>
                                <td id="location-val">: {props.data.dataPernikahan.masKawin}</td>
                            </tr>
                            <tr class="space-row">
                                <th>Alamat tempat pernikahan</th>
                                <td id="location-val">: {props.data.dataPernikahan.alamatPernikahan}</td>
                            </tr>
                                {
                                    props.data.dataPernikahan.daftarLampiran.map((data, index) => (
                                             index === 0 ? 
                                                <tr class="space-row">
                                                    <th width="50%">Daftar lampiran</th>
                                                    <td>: {data.namaSurat}, {data.model}</td>
                                                </tr>
                                            :
                                                <tr class="space-row">
                                                    <th width="50%"></th>
                                                    <td>: {data.namaSurat}, {data.model}</td>
                                                </tr>
                                            
                                    ))
                                }
                                
                            <tr class="space-row">
                                <th>Tanggal diterima</th>
                                <td id="location-val">: {props.data.dataPernikahan.tanggalDiterima}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <TitleForm 
                    title="Tanda tangan" 
                />
                <div className="form-row table-responsive">
                    <table class="table">
                        <tbody>
                            <tr class="space-row">
                                <th>Tanda tangan PPN/Pembantu PPN</th>
                                <td id="phone-val">: <img src={props.data.dataPernikahan.tandaTanganPPN} alt="" height="100px" /></td>
                            </tr>
                            <tr class="space-row">
                                <th>Tanda tangan calon mempelai/wali</th>
                                <td id="location-val">: <img src={props.data.mempelai.tandaTangan} alt="" height="100px" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default ResultN7;