# Matriz Oficial de Distribución por Grupos y Auditoría de Cobertura — SOGAC DB

> **Fecha de Actualización:** 2026-10-04  
> **Modelo de Referencia:** `Nuevo-SOGAC.js` (113 Tablas en 12 Módulos Temáticos)  
> **Estado de Cobertura:** 🟢 100% Soportado (147 Requerimientos Auditados)

---

## 📊 Métricas Globales de Distribución

| Métrica | Valor | Descripción |
| :--- | :---: | :--- |
| **Módulos Temáticos** | **12** | Estructura completa desde Catálogos Base hasta API Gateway |
| **Total Tablas Registradas** | **113** | Modelo Entidad-Relación 3NF Normalizado |
| **Tablas Asignadas a Grupos** | **83** | Reservadas para desarrollo directo por los 4 equipos de estudiantes |
| **Tablas Sin Grupo (Disponibles)** | **30** | Tablas catálogo/transversales listas para asignación |
| **Grupos de Desarrollo** | **4** | 21 Estudiantes totales del Proyecto Sociotecnológico |
| **Avance de Auditoría** | **100%** | Cobertura verificada en Maestros, Transacciones y Reportes 🟢 |

---

## 📌 Resumen Ejecutivo de Tablas Sin Grupo (30 Tablas Disponibles)

Del universo total de **113 tablas normalizadas en `Nuevo-SOGAC.js`**, existen **30 tablas** que no forman parte de los anexos actuales de asignación y se encuentran disponibles para ser adoptadas por alguno de los 4 grupos de desarrollo o tratadas como catálogos globales:

| # | Tabla (`snake_case`) | Módulo de Origen |
| :-: | :--- | :--- |
| **1** | `api_access_log` | Módulo 11: Seguridad, Auditoría y Configuración |
| **2** | `api_allowed_table` | Módulo 11: Seguridad, Auditoría y Configuración |
| **3** | `api_key` | Módulo 11: Seguridad, Auditoría y Configuración |
| **4** | `api_permission` | Módulo 11: Seguridad, Auditoría y Configuración |
| **5** | `api_system` | Módulo 11: Seguridad, Auditoría y Configuración |
| **6** | `asistencia_clase` | Módulo 9: Evaluaciones, Calificaciones y Actas |
| **7** | `becado` | Módulo 6: Identidad Civil y Expediente Estudiantil |
| **8** | `bloqueo_administrativo` | Módulo 8: Control de Inscripciones y Trámites Académicos |
| **9** | `condicion` | Módulo 2: Organización Institucional y Sedes |
| **10** | `convalidacion` | Módulo 8: Control de Inscripciones y Trámites Académicos |
| **11** | `departamento` | Módulo 2: Organización Institucional y Sedes |
| **12** | `dependencia_institucion` | Módulo 2: Organización Institucional y Sedes |
| **13** | `discapacidad` | Módulo 6: Identidad Civil y Expediente Estudiantil |
| **14** | `equivalencia_academica` | Módulo 8: Control de Inscripciones y Trámites Académicos |
| **15** | `escala_medicion` | Módulo 9: Evaluaciones, Calificaciones y Actas |
| **16** | `escala_nota` | Módulo 9: Evaluaciones, Calificaciones y Actas |
| **17** | `estatus_solicitud_grado` | Módulo 10: Titulación, Egresados y Certificaciones |
| **18** | `evento` | Módulo 11: Seguridad, Auditoría y Configuración |
| **19** | `evento_calendario` | Módulo 4: Calendario y Planificación de Lapsos |
| **20** | `experiencia_laboral_docente` | Módulo 5: Talento Humano y Cuerpo Docente |
| **21** | `inscripcion_per` | Módulo 8: Control de Inscripciones y Trámites Académicos |
| **22** | `promocion_estadistica_pnf` | Módulo 10: Titulación, Egresados y Certificaciones |
| **23** | `qr_validated_generated` | Módulo 10: Titulación, Egresados y Certificaciones |
| **24** | `regla_prelacion` | Módulo 3: Oferta y Estructura Académica (PNF/Mallas) |
| **25** | `rol_mensaje_configuracion` | Módulo 11: Seguridad, Auditoría y Configuración |
| **26** | `salida_intermedia` | Módulo 10: Titulación, Egresados y Certificaciones |
| **27** | `sede_pnf` | Módulo 2: Organización Institucional y Sedes |
| **28** | `status` | Módulo 0: Catálogos Base Lógicos |
| **29** | `tipo_condicion` | Módulo 2: Organización Institucional y Sedes |
| **30** | `titulo_obtenido` | Módulo 10: Titulación, Egresados y Certificaciones |

---

## 📋 Catálogo Detallado de Tablas Sin Grupo / Disponibles para Asignación

A continuación se detalla el propósito operativo, módulo temático y recomendación de asignación para cada una de las 30 tablas disponibles:

| # | Nombre de Tabla | Módulo en `Nuevo-SOGAC.js` | Reseña y Propósito de Uso | Grupo Sugerido |
| :-: | :--- | :--- | :--- | :--- |
| **1** | `api_access_log` | Módulo 11: Seguridad, Auditoría y Configuración | Registra el historial de peticiones HTTP, direcciones IP, tiempos de respuesta y consumo de los endpoints de la API (Rate Limiting y Auditoría). | **Grupo 1 / Grupo 4** |
| **2** | `api_allowed_table` | Módulo 11: Seguridad, Auditoría y Configuración | Lista blanca que define explícitamente cuáles tablas del sistema pueden ser expuestas o consultadas a través de la API Gateway externa. | **Grupo 1 / Grupo 4** |
| **3** | `api_key` | Módulo 11: Seguridad, Auditoría y Configuración | Almacena y gestiona tokens de acceso Bearer / OAuth (llaves API) asignadas a clientes o sistemas externos para autenticar consumos. | **Grupo 1 / Grupo 4** |
| **4** | `api_permission` | Módulo 11: Seguridad, Auditoría y Configuración | Define los permisos granulares (lectura, escritura, scope) asignados a cada API Key o sistema externo consumidor. | **Grupo 1 / Grupo 4** |
| **5** | `api_system` | Módulo 11: Seguridad, Auditoría y Configuración | Registro de aplicaciones o sistemas de terceros (ej. MPPEU, OPSU, pasarelas) autorizados para conectarse vía REST/Webhooks. | **Grupo 1 / Grupo 4** |
| **6** | `asistencia_clase` | Módulo 9: Evaluaciones, Calificaciones y Actas | Permite el pase de lista y registro diario/semanal de asistencias o inasistencias de los estudiantes por cada encuentro de clase. | **Grupo 2 / Grupo 3** |
| **7** | `becado` | Módulo 6: Identidad Civil y Expediente Estudiantil | Registro y control de estudiantes beneficiarios de becas (Becas Trabajo, Ayudantías, Alimentos, Transporte) y montos asignados. | **Grupo 2 / Grupo 4** |
| **8** | `bloqueo_administrativo` | Módulo 8: Control de Inscripciones y Trámites Académicos | Congelamiento o suspensión temporal de la ficha del estudiante por deudas, sanciones disciplinarias o falta de recaudos obligatorios. | **Grupo 1 / Grupo 2** |
| **9** | `condicion` | Módulo 2: Organización Institucional y Sedes | Catálogo de estatus o condiciones operativas asignables a la universidad, sedes, departamentos o ambientes físicos. | **Grupo 3 (Institucional)** |
| **10** | `convalidacion` | Módulo 8: Control de Inscripciones y Trámites Académicos | Registro de asignaturas convalidadas o homologadas externamente procedentes de otros pensums o universidades. | **Grupo 1 / Grupo 3** |
| **11** | `departamento` | Módulo 2: Organización Institucional y Sedes | Registro de departamentos o áreas matrices académicas (ej. Departamento de Informática, Administración, Agroalimentación). | **Grupo 3 (Estructura)** |
| **12** | `dependencia_institucion` | Módulo 2: Organización Institucional y Sedes | Catálogo de clasificación de dependencias institucionales (Pública, Privada, Autónoma, Territorial, etc.). | **Grupo 3 (Institucional)** |
| **13** | `discapacidad` | Módulo 6: Identidad Civil y Expediente Estudiantil | Catálogo 3NF de condiciones de diversidad funcional y necesidades especiales para políticas de inclusión y accesibilidad. | **Grupo 2 / Grupo 4** |
| **14** | `equivalencia_academica` | Módulo 8: Control de Inscripciones y Trámites Académicos | Registro del proceso y dictamen de homologación/reconocimiento de asignaturas cursadas en otras instituciones de educación superior. | **Grupo 1 / Grupo 3** |
| **15** | `escala_medicion` | Módulo 9: Evaluaciones, Calificaciones y Actas | Define los modelos de escala de evaluación institucional (ej. Escala 0-20 puntos, Cualitativa A-F, Aprobado/Reprobado). | **Grupo 2 (Evaluaciones)** |
| **16** | `escala_nota` | Módulo 9: Evaluaciones, Calificaciones y Actas | Tabla de equivalencias y ponderaciones para la conversión estandarizada de calificaciones e índices académicos acumulados. | **Grupo 2 (Evaluaciones)** |
| **17** | `estatus_solicitud_grado` | Módulo 10: Titulación, Egresados y Certificaciones | Catálogo de fases y estatus del flujo de solicitud de grado (En revisión, Créditos auditados, Aprobado en Consejo, Impreso). | **Grupo 2 / Grupo 4** |
| **18** | `evento` | Módulo 11: Seguridad, Auditoría y Configuración | Registro unificado tipo Syslog para capturar eventos de bajo nivel, excepciones de software y cambios de infraestructura. | **Grupo 1 (Seguridad)** |
| **19** | `evento_calendario` | Módulo 4: Calendario y Planificación de Lapsos | Registro de eventos singulares, feriados, inscripciones y fechas clave en el calendario lectivo institucional. | **Grupo 3 (Calendario)** |
| **20** | `experiencia_laboral_docente` | Módulo 5: Talento Humano y Cuerpo Docente | Antecedentes de empleos previos, cargos docentes o experiencia profesional externa declarada por el docente. | **Grupo 2 (Talento Humano)** |
| **21** | `inscripcion_per` | Módulo 8: Control de Inscripciones y Trámites Académicos | Ficha transaccional de inscripción de estudiantes en el Programa Especial de Recuperación (PER) para asignaturas reprobadas. | **Grupo 1 (Inscripciones)** |
| **22** | `promocion_estadistica_pnf` | Módulo 10: Titulación, Egresados y Certificaciones | Registro analítico y métricas precalculadas sobre tasas de egreso, retención y promoción académica por cohorte y PNF. | **Grupo 2 / Grupo 4** |
| **23** | `qr_validated_generated` | Módulo 10: Titulación, Egresados y Certificaciones | Trazabilidad y validación pública de códigos QR generados para verificación de autenticidad en documentos oficiales. | **Grupo 4 / Grupo 1** |
| **24** | `regla_prelacion` | Módulo 3: Oferta y Estructura Académica (PNF/Mallas) | Motor de reglas de prelación rígidas o blandas entre unidades curriculares de la malla de estudio. | **Grupo 3 (Mallas)** |
| **25** | `rol_mensaje_configuracion` | Módulo 11: Seguridad, Auditoría y Configuración | Personalización de mensajes, alertas y avisos de bienvenida en el dashboard configurables por rol de usuario. | **Grupo 1 (Seguridad)** |
| **26** | `salida_intermedia` | Módulo 10: Titulación, Egresados y Certificaciones | Registro y control de títulos intermedios o certificaciones de trayectoria (ej. TSU) otorgados antes del título final. | **Grupo 2 / Grupo 4** |
| **27** | `sede_pnf` | Módulo 2: Organización Institucional y Sedes | Tabla puente que autoriza y vincula formalmente cuáles PNF se imparten activamente en cada sede universitaria. | **Grupo 3 (Estructura)** |
| **28** | `status` | Módulo 0: Catálogos Base Lógicos | Catálogo maestro transversal de estados del sistema (Activo, Inactivo, Pendiente, Cancelado, Suspendido, etc.). | **Catálogo Global (Transversal)** |
| **29** | `tipo_condicion` | Módulo 2: Organización Institucional y Sedes | Catálogo de tipos o ámbitos de condición (ej. Infraestructura, Académica, Administrativa). | **Grupo 3 (Institucional)** |
| **30** | `titulo_obtenido` | Módulo 10: Titulación, Egresados y Certificaciones | Catálogo oficial de títulos universitarios (ej. Licenciado en Administración, Ingeniero en Informática, TSU). | **Grupo 2 / Grupo 4** |

---

## 👥 Resumen de Asignación por Grupos de Desarrollo

### 🟣 Grupo 1 — Isaac Rosales (Seguridad, Trámites e Inscripciones)
- **Líder:** Isaac Rosales
- **Integrantes (6):** David Villamizar, Valentín Rodríguez, Andrés Rosas, Rafael Montaña, Kris Moreno (QA).
- **Tablas de Escritura (21):** `user`, `rol`, `usuario_rol`, `permiso`, `rol_permiso`, `noticia`, `bitacora_sistema`, `tipo_inscripcion`, `inscripcion`, `inscripcion_detalle`, `tipo_tramite`, `causa_retiro`, `tramite_academico`, `tramite_cambio_pnf`, `tramite_cambio_sede`, `tramite_cambio_turno`, `tramite_reingreso`, `censo_estudiante`, `censo_oferta`, `censo_intensivo`, `programa_especial_recuperacion`.

### 🔵 Grupo 2 — Mauricio Rodríguez (Evaluaciones, Expediente, Promociones y Kárdex)
- **Líder:** Mauricio Rodríguez
- **Integrantes (5):** María Rosa Márquez, David Morey, Edgar Bravo, Amilcar Delgado.
- **Tablas de Escritura (25):** `estudiante`, `profesor`, `persona`, `autoridad`, `tipo_autoridad`, `cargo`, `categoria_docente`, `condicion_residencia`, `condicion_laboral`, `dedicacion_docente`, `etnia`, `profesion`, `perfil_bienestar`, `expediente_estudiante`, `historial_estatus_estudiante`, `plan_evaluacion`, `calificacion`, `calificacion_corte`, `acta_calificacion`, `libro_acta`, `historico_registro_anual`, `promocion`, `promocion_estudiante`, `promocion_pnf`, `solicitud_grado`.

### 🔴 Grupo 3 — Ángel Gonzales (Geográfico, Estructura Académica, Oferta y Horarios)
- **Líder:** Ángel Gonzales
- **Integrantes (5):** Alejandro Aguirrez, Miguel Hernández, Dixon Hernández, Enmanuel Rodríguez.
- **Tablas de Escritura (25):** `pais`, `estado`, `municipio`, `parroquia`, `localidad`, `universidad`, `sede`, `pnf`, `malla_curricular`, `malla_curricular_detalle`, `unidad_curricular`, `tipo_unidad_curricular`, `eje_curricular`, `trayecto`, `tipo_periodo`, `ano_academico`, `lapso_academico`, `corte_lapso`, `cohorte`, `cohorte_sede`, `seccion`, `carga_academica`, `aula`, `tipo_aula`, `horario`.

### 🟡 Grupo 4 — Luis Araguren (Admisión, Censo, Notificaciones, Proyectos y Titulación)
- **Líder:** Luis Araguren
- **Integrantes (5):** Luis Abreu, Andrés Díaz, Jean Morales, José Gregorio Palacios.
- **Tablas de Escritura (20):** `persona`, `telefono_persona`, `tipo_telefono`, `sistema_estudio_bachiller`, `rama_estudio_bachiller`, `expediente_estudiante`, `estudiante`, `user`, `rol`, `usuario_rol`, `proceso_admision`, `documento_requisito`, `notificacion_correo`, `proyecto_investigacion`, `integrante_proyecto`, `jurado_proyecto`, `solicitud_grado`, `qr_validated_generated_titulo`, `bitacora_sistema`, `configuracion_sistema`.

---

Documentación generada automáticamente y sincronizada con el ER Viewer (`index-med.html`) y la auditoría técnica.
