//ReactPDFVertical3.js
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, pdf } from '@react-pdf/renderer';
import { parseISO, format } from 'date-fns';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: '3mm',
    },
    container: {
        marginTop: '0mm',
        width: '204mm',
        height: '291mm',
        borderWidth: '.3mm',
        borderStyle: 'solid',
        borderColor: 'black',
    },
    logo: {
        position: 'absolute',
        top: '5mm',
        left: '5mm',
        width: '35mm',
        height: '35mm',
        objectFit: 'cover',
        maxWidth: '35mm',
        maxHeight: '35mm',
    },
    date: {
        position: 'absolute',
        top: '5mm',
        right: '10mm',
        fontSize: 11,
    },
    title: {
        position: 'absolute',
        marginTop: '50mm',
        left: '10mm',
        width: '150mm',
        fontSize: 11,
        fontWeight: 'bold',
    },
    text: {
        position: 'absolute',
        marginTop: '60mm',
        lineHeight: 1.5,
        width: '195mm',
        height: '35mm',
        left: '7mm',
        fontSize: 11,
    },
    image: {
        position: 'absolute',
        marginTop: '100mm',
        marginLeft: '8mm',
        width: '95mm',
        height: '65mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
    },
    description: {
        position: 'absolute',
        marginTop: '175mm',
        marginLeft: '13mm',
        width: '85mm',
        fontSize: 11,
        textAlign: 'center'
    },
    image2: {
        position: 'absolute',
        marginTop: '100mm',
        marginLeft: '108mm',
        width: '95mm',
        height: '65mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
    },
    description2: {
        position: 'absolute',
        marginTop: '175mm',
        marginLeft: '113mm',
        width: '85mm',
        fontSize: 11,
        textAlign: 'center'
    },
    image3: {
        position: 'absolute',
        marginTop: '190mm',
        marginLeft: '7mm',
        width: '60mm',
        height: '65mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
    },
    description3: {
        position: 'absolute',
        marginTop: '265mm',
        marginLeft: '10mm',
        width: '54mm',
        fontSize: 11,
        textAlign: 'center'
    },
    image4: {
        position: 'absolute',
        marginTop: '190mm',
        marginLeft: '75mm',
        width: '60mm',
        height: '65mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
    },
    description4: {
        position: 'absolute',
        marginTop: '265mm',
        marginLeft: '78mm',
        width: '54mm',
        fontSize: 11,
        textAlign: 'center'
    },
    image5: {
        position: 'absolute',
        marginTop: '190mm',
        marginLeft: '143mm',
        width: '60mm',
        height: '65mm',
        maxWidth: '95mm',
        maxHeight: '100mm',
        objectFit: 'cover',
    },
    description5: {
        position: 'absolute',
        marginTop: '265mm',
        marginLeft: '146mm',
        width: '54mm',
        fontSize: 11,
        textAlign: 'center'
    },
    contact: {
        position: 'absolute',
        bottom: '6mm',
        width: '175mm',
        height: '5mm',
        marginLeft: '5mm',
        fontSize: 11,
    },
    pageNumber: {
        position: 'absolute',
        bottom: '5mm',
        right: '5mm',
        fontSize: 11,
    },
});

const ReactPDFVertical5 = ({ data }) => {
    const formattedDate = data.fecha ? format(parseISO(data.fecha), 'dd MMMM yyyy') : '';

    return (
        <Document>
        <Page size="A4" style={styles.page}>
            {data.waterMark && (
                    <View style={styles.watermark}>
                        <Image src={data.waterMark} />
                    </View>
                )}
            <View style={styles.container}>
            {data.logo &&
                (<View style={styles.logo}>
                    <Image src={data.logo}/>
                </View>)}
            </View>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.title}>{data.titulo}</Text>
            <Text style={styles.text}>{data.texto}</Text>
            {data.imagen1 && (
            <View style={styles.image}>
                <Image src={data.imagen1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            {data.imagen2 && (
            <View style={styles.image2}>
                <Image src={data.imagen2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            {data.imagen3 && (
            <View style={styles.image3}>
                <Image src={data.imagen3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            {data.imagen4 && (
            <View style={styles.image4}>
                <Image src={data.imagen4} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            {data.imagen5 && (
            <View style={styles.image5}>
                <Image src={data.imagen5} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </View>
            )}
            <View style={styles.description}>
            <Text>{data.descripcion1}</Text>
            </View>
            <View style={styles.description2}>
            <Text>{data.descripcion2}</Text>
            </View>
            <View style={styles.description3}>
            <Text>{data.descripcion3}</Text>
            </View>
            <View style={styles.description4}>
            <Text>{data.descripcion4}</Text>
            </View>
            <View style={styles.description5}>
            <Text>{data.descripcion5}</Text>
            </View>
            <Text style={styles.contact}>{data.contacto}</Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
        </Page>
        </Document>
    );
};

const toBlob = async (data) => {
    const pdfBlob = await pdf(<ReactPDFVertical5 data={data} />).toBlob();
    return pdfBlob;
};

export { ReactPDFVertical5, toBlob };
