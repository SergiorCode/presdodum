from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

out=Path('webapp-demo/archivos');out.mkdir(exist_ok=True)
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
font_b='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
if Path(font).exists():
    pdfmetrics.registerFont(TTFont('Body',font));pdfmetrics.registerFont(TTFont('Bold',font_b))
else:
    pdfmetrics.registerFont(pdfmetrics.Font('Body','Helvetica','WinAnsiEncoding'));pdfmetrics.registerFont(pdfmetrics.Font('Bold','Helvetica-Bold','WinAnsiEncoding'))
files={
 'paquete':('Mi Paquete Integral de Salud','Resumen de servicios de demostración',[
  ('Tu paquete','Titular: Mariana López Hernández | Expediente PR-00271\nPaquete Integral de Salud | Estado ilustrativo: Activo'),
  ('Servicios del ejemplo','Expediente e historial, consultas y recetas; beneficios en vacunas, estudio preventivo anual, red médica, estudios y farmacia; orientación y seguimiento de solicitudes.'),
  ('Coberturas ilustrativas','Accidentes, gastos funerarios y ambulancia se presentan como flujos de demostración. Sus límites, exclusiones y condiciones requieren validación contractual.'),
  ('Importante','Este documento no confirma servicios contratados, elegibilidad, precios ni condiciones de una póliza. La selección de las 14 evidencias se realizará después de revisar el producto.')]),
 'constancia':('Constancia de estudio preventivo','Documento autorizado de medicina laboral',[
  ('Datos de ejemplo','Mariana López Hernández | PR-00271\nCentro Médico Horizonte | 08 de octubre de 2026'),
  ('Constancia ilustrativa','Se presenta un ejemplo de constancia administrativa de estudio preventivo para demostrar la consulta autorizada desde medicina laboral. No acredita la realización de una atención real.'),
  ('Alcance del acceso','Este archivo no contiene diagnósticos, resultados de laboratorio, prescripciones ni notas clínicas. Solo se muestra en empresa cuando la autorización ficticia del empleado está activa.'),
  ('Validez','Documento ficticio sin firma profesional ni validez clínica o laboral.')]),
 'receta':('Receta de ejemplo - REC-0082','Documento de uso exclusivo en la demostración',[
  ('Registro ilustrativo','Titular: Mariana López Hernández | PR-00271\nProfesional ficticio: Dra. Elena Morales\nFecha ilustrativa: 08 de octubre de 2026'),
  ('Contenido','Este registro permite demostrar la organización, vista previa y descarga de una receta dentro del expediente personal.'),
  ('Sin indicaciones médicas','No se indica ningún medicamento, dosis, frecuencia ni duración. Este documento no es una prescripción y no puede utilizarse para adquirir o consumir un tratamiento.'),
  ('Privacidad del prototipo','La receta pertenece al portal empleado. El portal empresa no tiene acceso a este archivo.')]),
 'nom':('Guía de bienestar laboral','Material ilustrativo del centro NOM-035',[
  ('Un espacio para escucharnos','La plataforma permite consultar documentos, participar en un ejercicio de bienestar y revisar la confirmación de participación.'),
  ('Participación de ejemplo','Las preguntas del prototipo son ilustrativas. No reproducen un instrumento oficial, no producen un diagnóstico y no acreditan cumplimiento de NOM-035.'),
  ('Información agregada','La empresa consulta cifras de participación de ejemplo. El portal no muestra las respuestas individuales del empleado.'),
  ('Implementación posterior','Los instrumentos, avisos, políticas, responsables y documentos definitivos deberán ser revisados y alineados al proceso normativo de la organización.')]),
 'privacidad':('Aviso de privacidad - demostración','Ejemplo de organización y acceso a la información',[
  ('Uso del prototipo','PRESDODUM contiene exclusivamente perfiles, registros clínicos y datos operativos ficticios. No captures datos de salud reales durante este recorrido.'),
  ('Guardado local','Los formularios de esta demostración conservan cambios en el navegador. No se envían correos ni solicitudes a prestadores reales.'),
  ('Acceso por rol','El empleado puede consultar su expediente ficticio. La empresa consulta datos laborales y una constancia preventiva solo cuando existe autorización en la demostración.'),
  ('Versión definitiva','Este texto no sustituye un aviso de privacidad legal. El producto real requerirá autenticación, servicios seguros, avisos aplicables y controles de acceso verificados.')]),
 'resultado':('Resultado de estudio - ejemplo','Documento personal del expediente PR-00271',[
  ('Datos de ejemplo','Mariana López Hernández | PR-00271\nEstudio preventivo anual | Fecha: 08 de octubre de 2026\nPrestador ficticio: Laboratorio Vida Clara'),
  ('Contenido del archivo','Ejemplo de documento para mostrar el flujo de consulta y descarga de resultados en el expediente personal.'),
  ('Sin resultados clínicos','Este archivo no contiene mediciones, rangos de referencia, hallazgos o interpretaciones médicas. No se ha realizado un estudio real.'),
  ('Acceso','Documento privado del portal empleado. No está disponible en el portal de empresa.')]),
 'cupon':('Cupón de farmacia - ejemplo','Beneficio ilustrativo sin valor comercial',[
  ('Datos del ejemplo','Titular: Mariana López Hernández | PR-00271\nCódigo ficticio: PRESDODUM-DEMO-0271\nFecha ilustrativa: 21 de octubre de 2026'),
  ('Beneficio de demostración','Ejemplo de un cupón para mostrar el flujo de activación y descarga. No representa un descuento vigente ni puede canjearse en una farmacia.'),
  ('Condiciones','Prestadores, disponibilidad, productos participantes y descuentos deberán definirse con el paquete contratado antes de la operación real.'),
  ('Validez','SIN VALOR COMERCIAL. NO CANJEABLE. Documento de uso exclusivo en la demostración.')])
}
for slug,(title,sub,sections) in files.items():
    c=canvas.Canvas(str(out/(slug+'.pdf')),pagesize=(595,842))
    c.setTitle('PRESDODUM | '+title);c.setAuthor('PRESDODUM - Demostración')
    c.setFillColor(HexColor('#f7f9f6'));c.rect(0,0,595,842,fill=1,stroke=0)
    c.setFillColor(HexColor('#146b58'));c.roundRect(44,758,32,32,9,fill=1,stroke=0)
    c.setFillColor(HexColor('#ffffff'));c.rect(58,765,5,18,fill=1,stroke=0);c.rect(51.5,771.5,18,5,fill=1,stroke=0)
    c.setFillColor(HexColor('#1c3330'));c.setFont('Bold',19);c.drawString(87,766,'PRESDODUM')
    c.setFillColor(HexColor('#64786a'));c.setFont('Body',8);c.drawString(44,733,'PAQUETE INTEGRAL DE SALUD / INFORMACIÓN FICTICIA')
    y=680
    c.setFont('Bold',23)
    for line in simpleSplit(title,'Bold',23,495):c.drawString(44,y,line);y-=30
    c.setFont('Body',11);c.setFillColor(HexColor('#6b7e70'));c.drawString(44,y-3,sub);y-=42
    c.setStrokeColor(HexColor('#dde7dd'));c.line(44,y,551,y);y-=31
    for heading,body in sections:
        c.setFillColor(HexColor('#244d3b'));c.setFont('Bold',11);c.drawString(44,y,heading);y-=20
        c.setFillColor(HexColor('#607466'));c.setFont('Body',10)
        for paragraph in body.split('\n'):
            for line in simpleSplit(paragraph,'Body',10,495):c.drawString(44,y,line);y-=16
        y-=23
    assert y>140,(slug,y)
    c.setFillColor(HexColor('#f6eee2'));c.roundRect(44,81,507,38,7,fill=1,stroke=0)
    c.setFillColor(HexColor('#9f8055'));c.setFont('Bold',9);c.drawCentredString(297.5,96,'DEMOSTRACIÓN - SIN VALIDEZ CLÍNICA, CONTRACTUAL NI COMERCIAL')
    c.setFont('Body',8);c.setFillColor(HexColor('#8b9988'));c.drawString(44,45,'PRESDODUM / Documento de ejemplo');c.drawRightString(551,45,'1 / 1')
    c.save()
    reader=PdfReader(str(out/(slug+'.pdf')))
    assert len(reader.pages)==1
    assert 'DEMOSTRACIÓN' in reader.pages[0].extract_text()
print('7 PDF creados y verificados: una página por archivo.')
