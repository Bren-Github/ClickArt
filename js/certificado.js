document.getElementById("descargarPDF").addEventListener("click", () => {
    const certificado = document.querySelector(".certificate")
    console.log(certificado)

    const options = {
        margin: 0.3,
        filename: "ejemplo.pdf",
        image: { type: "pdf", quality: 0.98},
        html2canvas: {scale: 2},
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "landscape"
        }
    }
    html2pdf().set(options).from(certificado).save()
})
