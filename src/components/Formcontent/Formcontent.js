import React from 'react';
import "../css/Formcontent.css"
import N1 from "./N1";
import N2 from "./N2";
import N3 from "./N3";
import N4 from "./N4";
import N5 from "./N5";
import N6 from "./N6";
import N7 from "./N7";
import ResultN1 from "../Result/ResultN1";
import ResultN2 from "../Result/ResultN2";
import ResultN3 from "../Result/ResultN3";
import ResultN4 from "../Result/ResultN4";
import ResultN5 from "../Result/ResultN5";
import ResultN6 from "../Result/ResultN6";
import ResultN7 from "../Result/ResultN7";
import NotFound from "../NotFound/NotFound";
import Button from '../Button/Button';

function Formcontent(props) {
    const { changeActivePage } = props;
    const { onChangeInput } = props;
    const { changeRouter } = props;

    return (
        <div className="form-content-container">
            <div className="form-content">
                { 
                    props.router === "form" ? 
                        props.activePage === 1
                        ? <N1 
                            kecamatan={props.kecamatan}
                            kelamin={props.kelamin}
                            agama={props.agama}
                            pekerjaan={props.pekerjaan}
                            onChangeInput={onChangeInput}
                            data={props.data}
                        /> 
                        : (
                            props.activePage === 2 ?
                            <N2 
                                kecamatan={props.kecamatan}
                                kelamin={props.kelamin}
                                agama={props.agama}
                                pekerjaan={props.pekerjaan}
                                onChangeInput={onChangeInput}
                                data={props.data}
                            /> 
                            : (
                                props.activePage === 3 ?
                                <N3 
                                    kecamatan={props.kecamatan}
                                    kelamin={props.kelamin}
                                    agama={props.agama}
                                    pekerjaan={props.pekerjaan}
                                    onChangeInput={onChangeInput}
                                    data={props.data}
                                /> 
                                : (
                                    props.activePage === 4 ?
                                    <N4 
                                        kecamatan={props.kecamatan}
                                        kelamin={props.kelamin}
                                        agama={props.agama}
                                        pekerjaan={props.pekerjaan}
                                        onChangeInput={onChangeInput}
                                        data={props.data}
                                    /> 
                                    : (
                                        props.activePage === 5 ?
                                        <N5 
                                            kecamatan={props.kecamatan}
                                            kelamin={props.kelamin}
                                            agama={props.agama}
                                            pekerjaan={props.pekerjaan}
                                            onChangeInput={onChangeInput}
                                            data={props.data}
                                        /> 
                                        : (
                                            props.activePage === 6 ?
                                            <N6 
                                                kecamatan={props.kecamatan}
                                                kelamin={props.kelamin}
                                                agama={props.agama}
                                                pekerjaan={props.pekerjaan}
                                                onChangeInput={onChangeInput}
                                                data={props.data} 
                                            /> 
                                            : (
                                                props.activePage === 7 ?
                                                <N7 
                                                    kecamatan={props.kecamatan}
                                                    kelamin={props.kelamin}
                                                    agama={props.agama}
                                                    pekerjaan={props.pekerjaan}
                                                    onChangeInput={onChangeInput}
                                                    data={props.data}
                                                /> 
                                                : (
                                                    <NotFound />
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )

                        : (
                            props.router === "result" ?
                            props.activePage === 1
                            ? <ResultN1 
                                data={props.data}
                                objects={props.objects}
                            /> 
                            : (
                                props.activePage === 2 ?
                                <ResultN2 
                                    data={props.data}
                                    objects={props.objects}
                                /> 
                                : (
                                    props.activePage === 3 ?
                                    <ResultN3 
                                        data={props.data}
                                        objects={props.objects}
                                    /> 
                                    : (
                                        props.activePage === 4 ?
                                        <ResultN4 
                                            data={props.data}
                                            objects={props.objects}
                                        /> 
                                        : (
                                            props.activePage === 5 ?
                                            <ResultN5 
                                                data={props.data}
                                                objects={props.objects}
                                            /> 
                                            : (
                                                props.activePage === 6 ?
                                                <ResultN6 
                                                    data={props.data}
                                                    objects={props.objects}
                                                /> 
                                                : (
                                                    props.activePage === 7 ?
                                                    <ResultN7 
                                                        data={props.data}
                                                        objects={props.objects}
                                                    /> 
                                                    : (
                                                        <NotFound />
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                            : null
                        )
                    }

                    <div className="d-flex justify-content-between form-main-content">
                        { 
                            props.router === "form" && props.activePage !== 1 ? 
                            <div onClick={() => changeActivePage(props.activePage-1)}>
                                <Button 
                                    styleButton="previousButton" 
                                    buttonTitle="Sebelumnya" 
                                />
                            </div>
                            : (
                                props.router === "form" && props.activePage === 1 ?
                                    <div></div>

                                : null
                            )

                        }

                        {
                            props.router === "form" && props.activePage !== 7 ? 
                                <div onClick={() => changeActivePage(props.activePage+1)}>
                                    <Button 
                                        styleButton="nextButton" 
                                        buttonTitle="Selanjutnya" 
                                    />
                                </div>
                            : (
                                props.router === "form" && props.activePage === 7 ? 
                                    <div onClick={() => changeRouter("result")}>
                                        <Button 
                                            styleButton="nextButton" 
                                            buttonTitle="Kirim Data" 
                                        />
                                    </div>
                                : null
                            )
                        }

                        { 
                            props.router === "result" && props.activePage !== 1 ? 
                            <div onClick={() => changeActivePage(props.activePage-1)}>
                                <Button 
                                    styleButton="previousButton" 
                                    buttonTitle="Sebelumnya" 
                                />
                            </div>
                            : (
                                props.router === "result" && props.activePage === 1 ?
                                    <div></div>

                                : null
                            )

                        }

                        {
                            props.router === "result" && props.activePage !== 7 ? 
                                <div onClick={() => changeActivePage(props.activePage+1)}>
                                    <Button 
                                        styleButton="nextButton" 
                                        buttonTitle="Selanjutnya" 
                                    />
                                </div>
                            : (
                                props.router === "result" && props.activePage === 7 ? 
                                    null
                                : null
                            )
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default Formcontent;