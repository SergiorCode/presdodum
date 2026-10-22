const r=(id,m,name,role,module,goal,info,cta,to,path,kind='Estado derivado')=>({id,m,name,role,module,goal,info,cta,to,path,kind});
export const screens=[
r('S01','M01','Acceso del empleado','Compartido','Acceso','Entrar a la experiencia del empleado','Perfil ficticio, correo y paquete','Entrar como Mariana','S05','/acceso','Vista maestra'),
r('S02','M01','Acceso de empresa','Empresa','Acceso','Entrar al portal de empresa','Organización ficticia y rol de administración','Entrar a empresa','S42','/acceso/empresa'),
r('S03','M01','Recuperar acceso','Compartido','Acceso','Solicitar instrucciones de recuperación','Correo de demostración','Enviar instrucciones','S04','/acceso/recuperar'),
r('S04','M01','Recuperación confirmada','Compartido','Acceso','Confirmar la simulación de recuperación','Confirmación sin envío de correo real','Volver al acceso','S01','/acceso/confirmacion'),
r('S05','M02','Inicio del empleado','Empleado','Inicio','Conocer el estado del paquete y siguientes acciones','Paquete, cita, prevención, solicitudes y accesos rápidos','Ver mi expediente','S06','/empleado/inicio','Vista maestra'),
r('S06','M03','Mi salud · resumen','Empleado','Mi salud','Consultar el expediente clínico personal','PR-00271, antecedentes, indicadores y documentos','Ver historial clínico','S07','/empleado/salud','Vista maestra'),
r('S07','M03','Historial clínico','Empleado','Mi salud','Recorrer los eventos de salud','Timeline de consultas, estudios y vacunas ficticios','Ver consulta','S09','/empleado/salud/historial'),
r('S08','M03','Mi registro de vacunas','Empleado','Mi salud','Consultar registros y beneficios de vacunación','Registros ilustrativos y documentos','Ver beneficio de vacunas','S18','/empleado/salud/vacunas'),
r('S09','M04','Detalle de consulta','Empleado','Mi salud','Consultar una atención registrada','Motivo, profesional, notas ficticias y receta','Ver receta','S10','/empleado/salud/consulta','Vista maestra'),
r('S10','M04','Detalle de receta','Empleado','Mi salud','Consultar y descargar una receta ilustrativa','Folio, emisor, fecha y registro sin pauta médica','Ver documento de receta','S34','/empleado/salud/receta'),
r('S11','M04','Resultado de estudio','Empleado','Mi salud','Consultar el documento de un estudio','Estudio preventivo, fecha, estatus y archivo ficticio','Ver documento','S34','/empleado/salud/resultado'),
r('S12','M05','Consultas próximas','Empleado','Consultas médicas','Administrar las citas programadas','Fecha, hora, profesional, modalidad y estado','Agendar consulta','S14','/empleado/consultas','Vista maestra'),
r('S13','M05','Consultas anteriores','Empleado','Consultas médicas','Revisar atenciones previas','Listado de consultas y acceso a detalle','Ver detalle clínico','S09','/empleado/consultas/anteriores'),
r('S14','M05','Agendar consulta · drawer','Empleado','Consultas médicas','Seleccionar una cita de demostración','Especialidad, fecha, horario y modalidad','Confirmar cita de ejemplo','S12','/empleado/consultas/agendar'),
r('S15','M06','Mis medicamentos','Empleado','Mi salud','Consultar registros de medicamentos','Tratamientos ficticios, estado y receta vinculada','Ver mis recetas','S16','/empleado/medicamentos','Vista maestra'),
r('S16','M06','Mis recetas','Empleado','Mi salud','Localizar recetas emitidas','Folios, fechas y documentos ilustrativos','Abrir receta','S10','/empleado/medicamentos/recetas'),
r('S17','M07','Catálogo de beneficios','Empleado','Beneficios','Explorar el paquete integral','Vacunas, prevención, red médica, estudios y farmacia','Ver estudio preventivo','S19','/empleado/beneficios','Vista maestra'),
r('S18','M08','Descuentos en vacunas','Empleado','Beneficios','Consultar y activar el beneficio ilustrativo','Servicios, disponibilidad y condiciones de ejemplo','Solicitar orientación','S24','/empleado/beneficios/vacunas','Vista maestra'),
r('S19','M08','Estudio preventivo anual','Empleado','Beneficios','Consultar el estado del estudio anual','Elegibilidad, pasos, prestadores y resultado','Solicitar estudio','S25','/empleado/beneficios/preventivo'),
r('S20','M08','Descuentos en medicamentos','Empleado','Beneficios','Consultar la red y condiciones de farmacia','Farmacias ficticias y cupón de demostración','Generar cupón de ejemplo','S34','/empleado/beneficios/farmacia'),
r('S21','M08','Descuentos en estudios','Empleado','Beneficios','Consultar opciones de laboratorio e imagen','Prestadores, categorías y condiciones ilustrativas','Consultar red de estudios','S22','/empleado/beneficios/estudios'),
r('S22','M09','Red médica y de estudios','Empleado','Beneficios','Encontrar un prestador ficticio','Filtros por servicio, zona y modalidad','Ver prestador','S23','/empleado/red-medica','Vista maestra'),
r('S23','M09','Perfil de prestador','Empleado','Beneficios','Consultar disponibilidad y beneficio','Especialidad, ubicación ficticia, horarios y descuento','Agendar consulta','S14','/empleado/red-medica/prestador'),
r('S24','M10','Solicitar asesoría médica','Empleado','Solicitudes','Crear una solicitud de orientación','Motivo general, modalidad y preferencia de contacto','Enviar solicitud de ejemplo','S27','/empleado/solicitar/asesoria','Vista maestra'),
r('S25','M10','Solicitar estudio preventivo','Empleado','Solicitudes','Solicitar coordinación del estudio anual','Prestador, fecha preferida y comentarios','Enviar solicitud de ejemplo','S27','/empleado/solicitar/preventivo'),
r('S26','M10','Solicitar ambulancia · simulación','Empleado','Coberturas','Demostrar el flujo de asistencia de ambulancia','Ubicación ficticia, contacto y condiciones ilustrativas','Simular solicitud','S27','/empleado/solicitar/ambulancia'),
r('S27','M10','Solicitud registrada','Empleado','Solicitudes','Mostrar folio y próximos pasos','Folio, estado, fecha y seguimiento','Dar seguimiento','S32','/empleado/solicitar/confirmacion'),
r('S28','M11','Mis coberturas','Empleado','Coberturas','Comprender las coberturas del paquete','Accidentes, gastos funerarios y ambulancia','Ver cobertura por accidentes','S29','/empleado/coberturas','Vista maestra'),
r('S29','M12','Cobertura por accidentes','Empleado','Coberturas','Consultar alcance y proceso ilustrativos','Beneficiarios, requisitos y documentos de ejemplo','Iniciar solicitud de ejemplo','S24','/empleado/coberturas/accidentes','Vista maestra'),
r('S30','M12','Cobertura de gastos funerarios','Empleado','Coberturas','Consultar asistencia y requisitos ilustrativos','Beneficiarios, documentos y pasos de apoyo','Solicitar orientación','S24','/empleado/coberturas/funerarios'),
r('S31','M13','Mis solicitudes','Empleado','Solicitudes','Consultar solicitudes y su estado','Búsqueda, filtros, folios, fechas y estados','Ver seguimiento','S32','/empleado/solicitudes','Vista maestra'),
r('S32','M14','Detalle y seguimiento','Empleado','Solicitudes','Conocer el avance y agregar información','Timeline, mensajes, adjuntos y próximo paso','Agregar comentario','S32','/empleado/solicitudes/detalle','Vista maestra'),
r('S33','M15','Centro de documentos','Compartido','Documentos','Localizar y descargar documentos permitidos','Categorías, búsqueda, fechas y permisos por rol','Abrir documento','S34','/documentos','Vista maestra'),
r('S34','M15','Visor de documento · modal','Compartido','Documentos','Previsualizar y descargar un archivo ficticio','Título, emisor, contenido ilustrativo y archivo','Descargar archivo de ejemplo','S34','/documentos/visor'),
r('S35','M16','Centro NOM-035','Empleado','NOM-035','Consultar información y actividades de bienestar','Documentos, confidencialidad y cuestionario ilustrativo','Abrir ejercicio de bienestar','S36','/empleado/nom035','Vista maestra'),
r('S36','M16','Cuestionario de bienestar','Empleado','NOM-035','Demostrar una captura de respuestas','Preguntas de ejemplo, progreso y guardado local','Guardar respuestas de ejemplo','S37','/empleado/nom035/cuestionario'),
r('S37','M16','Cuestionario completado','Empleado','NOM-035','Confirmar registro del ejercicio ilustrativo','Fecha, confirmación y acceso a documentos','Volver al centro','S35','/empleado/nom035/completado'),
r('S38','M17','Mi perfil','Empleado','Mi perfil','Consultar identidad, contacto y privacidad','Mariana López Hernández, empresa y consentimiento','Editar perfil','S39','/empleado/perfil','Vista maestra'),
r('S39','M17','Editar perfil y consentimiento','Empleado','Mi perfil','Actualizar datos ficticios y acceso laboral','Contacto, contacto de apoyo y autorización laboral','Guardar cambios','S38','/empleado/perfil/editar'),
r('S40','M18','Centro de ayuda','Compartido','Ayuda','Resolver dudas de uso de la plataforma','Buscador, preguntas frecuentes y soporte','Abrir asistente PRESDODUM','S41','/ayuda','Vista maestra'),
r('S41','M18','Asistente PRESDODUM · panel','Compartido','Ayuda','Demostrar soporte contextual y navegación','Conversación simulada, sugerencias y enlaces útiles','Consultar beneficios','S17','/ayuda/asistente'),
r('S42','M19','Inicio de empresa','Empresa','Inicio','Conocer actividad y pendientes de la organización','Colaboradores, solicitudes, prevención y actividad','Ver colaboradores','S43','/empresa/inicio','Vista maestra'),
r('S43','M20','Directorio de colaboradores','Empresa','Colaboradores','Buscar y consultar colaboradores ficticios','Nombre, área, paquete, estado y autorización','Abrir perfil','S45','/empresa/colaboradores','Vista maestra'),
r('S44','M20','Alta de colaborador · drawer','Empresa','Colaboradores','Agregar un colaborador de demostración','Nombre, correo, área y paquete sin datos clínicos','Guardar colaborador de ejemplo','S43','/empresa/colaboradores/alta'),
r('S45','M21','Perfil de colaborador','Empresa','Colaboradores','Consultar información laboral y alcance permitido','Paquete, actividad y consentimiento registrado','Ver expediente autorizado','S46','/empresa/colaboradores/perfil','Vista maestra'),
r('S46','M21','Expediente autorizado','Empresa / Medicina laboral','Medicina laboral','Mostrar solo información expresamente autorizada','Constancia laboral y estudio autorizado; sin notas privadas','Ver documento autorizado','S34','/empresa/colaboradores/expediente'),
r('S47','M22','Medicina laboral','Empresa / Medicina laboral','Medicina laboral','Dar seguimiento a prevención laboral','Estudios, autorizaciones y estado por colaborador','Ver actividad','S48','/empresa/medicina-laboral','Vista maestra'),
r('S48','M22','Actividad de medicina laboral','Empresa / Medicina laboral','Medicina laboral','Recorrer eventos laborales permitidos','Timeline con actor, fecha, acción y alcance','Consultar colaborador','S45','/empresa/medicina-laboral/actividad'),
r('S49','M23','Bandeja de solicitudes','Empresa','Solicitudes','Gestionar solicitudes operativas de colaboradores','Folios, tipo, prioridad, responsable y estado','Abrir solicitud','S50','/empresa/solicitudes','Vista maestra'),
r('S50','M23','Gestión de solicitud','Empresa','Solicitudes','Asignar responsable y actualizar avance','Datos operativos, historial y mensajes compartidos','Guardar actualización','S49','/empresa/solicitudes/detalle'),
r('S51','M24','Reportes de empresa','Empresa','Reportes','Revisar actividad agregada de la organización','Uso del paquete, prevención y filtros de periodo','Exportar reporte ficticio','S51','/empresa/reportes','Vista maestra'),
r('S52','M24','Seguimiento NOM-035 de empresa','Empresa','NOM-035','Consultar participación agregada y documentos','Participación, campañas y ejercicio sin evaluación oficial','Consultar documentos NOM-035','S33','/empresa/nom035'),
r('S53','M25','Configuración de empresa','Empresa','Configuración','Administrar los datos de la organización ficticia','Nombre, contacto, paquete y preferencias','Guardar configuración','S53','/empresa/configuracion','Vista maestra'),
r('S54','M25','Roles y permisos','Empresa','Configuración','Revisar y editar permisos de demostración','Administración, medicina laboral y alcance autorizado','Guardar permisos','S54','/empresa/configuracion/permisos'),
r('S55','M25','Preferencias de notificaciones','Empresa','Configuración','Configurar avisos operativos locales','Canales de ejemplo y tipo de evento','Guardar preferencias','S55','/empresa/configuracion/notificaciones')
];
export const masterNames=['Acceso y recuperación','Inicio del empleado','Expediente e historial','Detalle clínico','Consultas y agenda','Medicamentos y recetas','Catálogo de beneficios','Detalle de beneficio','Red y perfil de prestador','Solicitud de servicio','Catálogo de coberturas','Detalle de cobertura','Listado de solicitudes','Seguimiento de solicitud','Documentos y visor','NOM-035 y bienestar','Perfil y consentimiento','Ayuda y asistente','Inicio de empresa','Colaboradores y alta','Perfil y acceso autorizado','Medicina laboral y actividad','Gestión de solicitudes','Reportes y participación','Configuración de empresa'];
export const masters=masterNames.map((name,i)=>({id:'M'+String(i+1).padStart(2,'0'),name,states:screens.filter(s=>s.m==='M'+String(i+1).padStart(2,'0'))}));
export const employee={id:'PR-00271',name:'Mariana López Hernández',first:'Mariana',initials:'ML',email:'mariana.lopez@example.com',phone:'55 0000 0271',birth:'1992-04-16',area:'Diseño y comunicación',job:'Coordinadora de diseño',company:'Grupo Horizonte',package:'Paquete Integral de Salud',status:'Activo',start:'2026-01-15',blood:'O+',allergies:'Sin alergias registradas · ejemplo',contact:'Lucía Hernández',contactPhone:'55 0000 0272',consent:true};
export const colleagues=[
{name:'Mariana López Hernández',id:'PR-00271',area:'Diseño y comunicación',initials:'ML',status:'Activo',consent:true,color:'pink'},
{name:'Carlos Mendoza Ruiz',id:'PR-00272',area:'Operaciones',initials:'CM',status:'Activo',consent:false,color:'blue'},
{name:'Valeria Torres Silva',id:'PR-00273',area:'Recursos Humanos',initials:'VT',status:'Activo',consent:true,color:'purple'},
{name:'Diego Ramírez Cruz',id:'PR-00274',area:'Tecnología',initials:'DR',status:'Pendiente',consent:false,color:'orange'},
{name:'Ana Sofía Méndez',id:'PR-00275',area:'Administración',initials:'AM',status:'Activo',consent:true,color:'green'},
{name:'Jorge García Vega',id:'PR-00276',area:'Operaciones',initials:'JG',status:'Activo',consent:false,color:'blue'}
];
export const benefitData=[
{id:'preventivo',title:'Tu prevención, primero',name:'Estudio preventivo anual',desc:'Un estudio gratuito al año para la prevención de enfermedades y complicaciones.',icon:'heart',route:'S19',tag:'Incluido en tu paquete',color:'pink'},
{id:'vacunas',title:'Un paso adelante',name:'Descuentos en vacunas',desc:'Accede a opciones de vacunación en nuestra red.',icon:'shield',route:'S18',tag:'Beneficio disponible',color:'purple'},
{id:'medicos',title:'Cerca de ti',name:'Red médica',desc:'Encuentra atención y especialistas para cada etapa.',icon:'stethoscope',route:'S22',tag:'Tarifas preferenciales',color:'blue'},
{id:'estudios',title:'Más claridad para tu salud',name:'Estudios y laboratorios',desc:'Consulta opciones de laboratorio e imagen.',icon:'flask',route:'S21',tag:'Descuentos de ejemplo',color:'green'},
{id:'farmacia',title:'Tu tratamiento, a tu alcance',name:'Descuentos en medicamentos',desc:'Descuentos desde el 30% en 100 medicamentos diferentes.',icon:'pill',route:'S20',tag:'Cupón de demostración',color:'orange'},
{id:'asesoria',title:'Te escuchamos',name:'Asesoría médica',desc:'10 asesorías médicas gratuitas en línea o vía telefónica durante la vigencia del contrato.',icon:'chat',route:'S24',tag:'Solicítala desde aquí',color:'blue'}
];
export const docs=[
{id:'paquete',name:'Mi Paquete Integral de Salud',category:'Mi paquete',date:'15 ene 2026',type:'PDF',desc:'Resumen ilustrativo de servicios y condiciones del paquete.',allowed:true},
{id:'constancia',name:'Constancia de estudio preventivo',category:'Salud',date:'08 oct 2026',type:'PDF',desc:'Constancia ficticia autorizada para medicina laboral. No incluye resultados clínicos.',allowed:true},
{id:'receta',name:'Receta de ejemplo · REC-0082',category:'Salud',date:'08 oct 2026',type:'PDF',desc:'Registro ilustrativo. No es una prescripción válida ni contiene indicaciones de tratamiento.',allowed:false},
{id:'nom',name:'Guía de bienestar laboral',category:'NOM-035',date:'01 oct 2026',type:'PDF',desc:'Material ilustrativo sobre bienestar y participación. No sustituye documentación normativa oficial.',allowed:true},
{id:'privacidad',name:'Aviso de privacidad · demostración',category:'Mi paquete',date:'15 ene 2026',type:'PDF',desc:'Ejemplo de organización del aviso y del acceso a la información ficticia.',allowed:true},
{id:'resultado',name:'Resultado de estudio · ejemplo',category:'Salud',date:'08 oct 2026',type:'PDF',desc:'Documento ficticio para demostrar el expediente personal; no se comparte con empresa.',allowed:false}
];

// Alcances transcritos de los 14 puntos compartidos por el usuario.
export const packageTerms={advisories:10,pharmacyMedicines:100,pharmacyDiscountFrom:30,accidentRefund:4000,funeralInsurance:40000,ambulances:1,annualPreventive:1,vaccines:['COVID-19','Influenza','Tdap/Td','Hepatitis A y B','VPH','Varicela','Herpes zóster']};
