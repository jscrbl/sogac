window.SOGAC_DBML = `\n
// ==========================================
// MÓDULO 0: CATÁLOGOS BASE
// ==========================================
Table status {
  id_sta integer [primary key, increment, note: 'Identificador único del estatus (Ej. 1=Activo, 2=Inactivo)']
  nombre_sta varchar(50) [not null, note: 'Nombre del estatus (Activo, Inactivo, Pendiente, etc.)']
  descripcion_sta text [note: 'Descripción del estatus']
  modulo_sta varchar(100) [note: 'Módulo o contexto al que pertenece el estatus (opcional para agrupación)']

  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// Modelo Entidad-Relación - UPTP "Juan de Jesús Montilla"
// Basado en PostgreSQL y Laravel 11 - VERSIÓN MASTER CONSOLIDADA FINAL

// ==========================================
// MÓDULO 1: ESTRUCTURA GEOGRÁFICA
// ==========================================
Table pais {
  id_pai integer [primary key, increment, note: 'Identificador autoincremental único del país']
  nombre_pai varchar(255) [not null, note: 'Nombre oficial del país (Ej. Venezuela)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table estado {
  id_esd integer [primary key, increment, note: 'Identificador autoincremental único del estado o provincia']
  nombre_esd varchar(255) [not null, note: 'Nombre de la entidad federal (Ej. Portuguesa)']

  pai_id integer [not null, note: 'Clave foránea que vincula con el país correspondiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table municipio {
  id_mun integer [primary key, increment, note: 'Identificador autoincremental único del municipio']
  nombre_mun varchar(255) [not null, note: 'Nombre del municipio (Ej. Páez, Araure)']

  esd_id integer [not null, note: 'Clave foránea que vincula con el estado correspondiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table parroquia {
  id_par integer [primary key, increment, note: 'Identificador autoincremental único de la parroquia']
  nombre_par varchar(255) [not null, note: 'Nombre de la división político-territorial menor']

  mun_id integer [not null, note: 'Clave foránea que vincula con el municipio correspondiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table localidad {
  id_loc integer [primary key, increment, note: 'Identificador autoincremental único de la localidad']
  nombre_loc varchar(255) [not null, note: 'Nombre específico de la ciudad, caserío o sector']

  par_id integer [not null, note: 'Clave foránea que vincula con la parroquia correspondiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 2: ORGANIZACIÓN INSTITUCIONAL Y SEDES
// ==========================================
// ==========================================
// MÓDULO 2: ORGANIZACIÓN INSTITUCIONAL Y SEDES
// ==========================================
Table dependencia_institucion {
  id_dpi integer [primary key, increment, note: 'Identificador único del tipo de dependencia (Ej. Pública, Privada, Autónoma)']
  nombre_dpi varchar(100) [not null, note: 'Nombre oficial de la dependencia (Ej. Territorial MPPEU, Autónoma, Privada)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro']
  updated_at timestamptz [note: 'Fecha y hora de última actualización del registro']
  deleted_at timestamptz [note: 'Fecha y hora de borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que actualizó por última vez']
}

Table tipo_condicion {
  id_tco integer [primary key, increment, note: 'Identificador único del tipo o ámbito de condición (Ej. Universidad, Sede, Departamento)']
  nombre_tco varchar(100) [not null, note: 'Nombre descriptivo del ámbito de aplicación (Ej. Universidad, Sede, Programa, Estudiante)']
  descripcion_tco text [note: 'Explicación detallada sobre el alcance y propósito de este ámbito de condición en el sistema']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro']
  updated_at timestamptz [note: 'Fecha y hora de última actualización del registro']
  deleted_at timestamptz [note: 'Fecha y hora de borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que actualizó por última vez']

  indexes {
    (nombre_tco) [unique, note: 'Evita duplicidad de nombres en los tipos de condición']
  }
}

Table condicion {
  id_cdn integer [primary key, increment, note: 'Identificador único de la condición o estatus funcional']
  nombre_cdn varchar(100) [not null, note: 'Nombre o etiqueta de la condición (Ej. Oficializada, En Formación, Núcleo Principal, Extensión)']
  descripcion_cdn text [note: 'Descripción conceptual detallada del significado administrativo u operativo de esta condición']

  tco_id integer [not null, note: 'Clave foránea que clasifica la condición según su ámbito (Ref: tipo_condicion)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro']
  updated_at timestamptz [note: 'Fecha y hora de última actualización del registro']
  deleted_at timestamptz [note: 'Fecha y hora de borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que actualizó por última vez']

  indexes {
    (tco_id, nombre_cdn) [unique, note: 'Garantiza que una condición no se repita dentro del mismo tipo de condición']
  }
}

Table universidad {
  id_uni integer [primary key, increment, note: 'Identificador autoincremental único de la institución matriz']
  codigo_ministerio_uni varchar(30) [note: 'Código oficial asignado por la OPSU o el MPPEU para trámites ministeriales']
  nombre_uni varchar(255) [not null, note: 'Nombre legal completo de la universidad registrado en Gaceta Oficial']
  siglas_uni varchar(20) [note: 'Abreviatura oficial de la institución (Ej. UPTP)']
  rif_uni varchar(20) [note: 'Registro de Información Fiscal institucional ante el SENIAT']
  gaceta_uni varchar(255) [note: 'Número y datos de la Gaceta Oficial de creación o decreto de la institución']
  fecha_gaceta_uni date [note: 'Fecha de publicación oficial de la Gaceta Oficial de creación']
  decreto_uni varchar(255) [note: 'Número de decreto o resolución de creación o transformación universitaria']
  fecha_decreto_uni date [note: 'Fecha de promulgación del decreto presidencial o ministerial']
  telefono_uni varchar(50) [note: 'Número telefónico oficial del rectorado / sede central para correspondencia']
  correo_uni varchar(255) [note: 'Correo electrónico institucional principal del rectorado / despacho']
  sitio_web_uni varchar(255) [note: 'Dirección URL del portal web oficial de la institución']
  logo_uni text [note: 'Ruta o URL del archivo del isotipo/escudo institucional para reportes y constancias']
  fecha_inicio_uni date [note: 'Fecha oficial de inicio de actividades institucionales']
  fecha_fin_uni date [note: 'Fecha de cese de operaciones o clausura legal de la institución (Nullable si está activa)']

  dpi_id integer [note: 'Clave foránea que define el tipo de dependencia (Ref: dependencia_institucion, Ej. Pública, Privada)']
  cdn_id integer [note: 'Clave foránea a condicion donde el ámbito es Universidad (Ref: condicion, Ej. Oficializada, En Formación)']
  loc_id integer [note: 'Clave foránea a la localidad geográfica donde se ubica el Rectorado o Sede Matriz (Ref: localidad)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha de última actualización del registro']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que actualizó por última vez']
}

Table sede {
  id_sed integer [primary key, increment, note: 'Identificador autoincremental del núcleo o extensión física de la universidad']
  nombre_sed varchar(255) [not null, note: 'Denominación oficial del núcleo o sede (Ej. Sede Acarigua, Núcleo Guanare)']
  siglas_sed varchar(20) [note: 'Siglas o código corto para identificación rápida del núcleo (Ej. NUC-ACA, EXT-TUR)']
  codigo_ministerio_sed varchar(30) [note: 'Código específico asignado a la sede por entes rectores (MPPEU/OPSU)']
  direccion_sed text [note: 'Dirección física detallada de la sede para ubicación, envíos y correspondencia']
  telefono_sed varchar(50) [note: 'Número telefónico de contacto de la administración de la sede']
  correo_sed varchar(255) [note: 'Correo electrónico oficial de contacto de la sede o coordinación territorial']
  gaceta_sed varchar(255) [note: 'Número de Gaceta Oficial de creación de la sede o núcleo']
  fecha_gaceta_sed date [note: 'Fecha de publicación oficial de la Gaceta de la sede']
  resolucion_sed varchar(255) [note: 'Número de resolución del Consejo Universitario o CNU que autoriza la sede']
  fecha_resolucion_sed date [note: 'Fecha de aprobación de la resolución de creación de la sede']
  fecha_inicio_sed date [note: 'Fecha de inicio oficial de operaciones académicas y administrativas en la sede']
  fecha_fin_sed date [note: 'Fecha de cierre o cese de operaciones de la sede (Nullable si está activa)']

  uni_id integer [not null, note: 'Clave foránea a la universidad matriz a la que pertenece esta sede (Ref: universidad)']
  loc_id integer [not null, note: 'Clave foránea a la localidad donde está ubicada físicamente la sede (Ref: localidad)']
  cdn_id integer [note: 'Clave foránea a condicion donde el ámbito es Sede (Ref: condicion, Ej. Sede Principal, Extensión)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha de última actualización del registro']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que actualizó por última vez']
}

Table sede_pnf {
  id_sep integer [primary key, increment, note: 'Tabla puente para definir la oferta académica por núcleo']
  sed_id integer [not null, note: 'Núcleo donde se imparte el programa']
  pnf_id integer [not null, note: 'Programa Nacional de Formación ofertado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (sed_id, pnf_id) [unique, note: 'Garantiza que una sede no duplique la oferta del mismo PNF']
  }
}

Table cohorte {
  id_coh integer [primary key, increment, note: 'Agrupación temporal de estudiantes de nuevo ingreso']
  nombre_coh varchar(255) [note: 'Denominación de la generación (Ej. Cohorte 2026-I)']
  fecha_inicio_coh date [note: 'Fecha oficial de arranque de actividades para la cohorte']

  laa_id integer [not null, note: 'Periodo inicial en el que arrancó esta generación']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table cohorte_sede {
  id_cos integer [primary key, increment, note: 'Distribución de los ingresantes por oferta de sede (sede_pnf)']
  nombre_cos varchar(255) [note: 'Etiqueta descriptiva de este grupo específico']

  coh_id integer [not null, note: 'Generación a la que pertenecen']
  sep_id integer [not null, note: 'Oferta académica de la sede asignada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 3: AUTORIDADES Y FIRMANTES
// ==========================================
Table tipo_autoridad {
  id_tia integer [primary key, increment, note: 'Identificador de la jerarquía directiva']
  nombre_tia varchar(255) [note: 'Clasificación del alto mando (Ej. Rector, Vicerrector, Secretario)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table cargo {
  id_car integer [primary key, increment, note: 'Identificador de los cargos administrativos']
  nombre_car varchar(255) [note: 'Denominación operativa (Ej. Coordinador PNF, Director de Línea)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table autoridad {
  id_aut integer [primary key, increment, note: 'Registro histórico de personas en cargos de poder']
  resolucion_aut varchar(255) [note: 'Documento legal interno de nombramiento']
  gaceta_aut varchar(255) [note: 'Gaceta Oficial de designación (si aplica)']
  fecha_inicio_aut date [note: 'Día en que asume el cargo']
  fecha_fin_aut date [note: 'Día en que cesa sus funciones (Nullable si está activo)']

  per_id integer [not null, note: 'Datos personales de quien ejerce la autoridad']
  tia_id integer [not null, note: 'Nivel jerárquico asignado']
  car_id integer [note: 'Cargo específico departamental (Nullable para altas autoridades)']
  uni_id integer [not null, note: 'Institución donde ejerce jurisdicción']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 4: ESCALAS DE MEDICIÓN
// ==========================================
Table escala_medicion {
  id_esm integer [primary key, increment, note: 'Identificador del modelo de calificación']
  nombre_esm varchar(255) [not null, note: 'Tipo de escala (Ej. Escala 1 al 20, Cualitativa)']
  nota_aprobatoria_esm numeric [not null, note: 'Valor mínimo necesario para aprobar la unidad curricular']
  nota_minima_esm numeric [note: 'Límite inferior de la escala permitida']
  nota_maxima_esm numeric [note: 'Límite superior absoluto de la escala']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table escala_nota {
  id_esn integer [primary key, increment, note: 'Tabla de conversión para promedios estandarizados']
  nota_original_esn numeric [not null, note: 'Valor de nota en la escala original que genera esta conversión']
  nota_100_esn numeric [note: 'Valor equivalente llevado a base 100%']
  nota_20_esn numeric [note: 'Valor equivalente llevado a base 20 puntos']

  esm_id integer [not null, note: 'Escala a la que pertenece esta conversión']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 5: PERFIL DEMOGRÁFICO Y ANTECEDENTES
// ==========================================
Table etnia {
  id_etn integer [primary key, increment, note: 'Catálogo de pueblos originarios']
  nombre_etn varchar(255) [not null, note: 'Denominación de la comunidad indígena']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table discapacidad {
  id_dis integer [primary key, increment, note: 'Catálogo de condiciones funcionales']
  nombre_dis varchar(255) [not null, note: 'Descripción clínica o funcional de la discapacidad']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table rama_estudio_bachiller {
  id_reb integer [primary key, increment, note: 'Clasificación del título de educación media']
  nombre_reb varchar(255) [not null, note: 'Mención obtenida (Ej. Ciencias, Humanidades, Técnico Medio)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table sistema_estudio_bachiller {
  id_seb integer [primary key, increment, note: 'Modalidad de la educación previa']
  nombre_seb varchar(255) [not null, note: 'Tipo de régimen (Ej. Regular, Parasistema, Misión Ribas)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table becado {
  id_bec integer [primary key, increment, note: 'Control de beneficios estudiantiles']
  organismo_beca_bec varchar(255) [note: 'Ente financiador (Ej. Fundayacucho, Gobernación)']
  interno_bec boolean [default: false, note: 'True si la beca es otorgada por la misma universidad (Ej. Ayudantía)']

  est_id integer [not null, note: 'Alumno receptor de la beca']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 6: ESTRUCTURA ACADÉMICA
// ==========================================
Table departamento {
  id_dep integer [primary key, increment, note: 'Identificador único del área académica matriz']
  nombre_dep varchar(255) [not null, note: 'Nombre oficial del departamento (Ej. Dpto. de Informática)']

  jefe_departamento_pro_id integer [note: 'Profesor responsable de avalar procesos del área']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tipo_periodo {
  id_tpd integer [primary key, increment, note: 'Identificador único de la modalidad de período académico']
  nombre_tpd varchar(100) [not null, note: 'Nombre de la modalidad (Ej. Semestral, Trimestral, Cuatrimestral, Trayecto/Anual, Intensivo)']
  codigo_tpd varchar(30) [note: 'Código alfanumérico referencial (Ej. SEM, TRI, CUA, TRA, INT)']
  duracion_semanas_tpd integer [note: 'Duración reglamentaria estándar en semanas lectivas (Ej. 16, 12, 14, 36, 6)']
  descripcion_tpd text [note: 'Descripción reglamentaria o notas operativas del tipo de período']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table trayecto {
  id_tra integer [primary key, increment, note: 'Identificador único del trayecto o nivel académico (Ej. Trayecto Inicial, Trayecto I, Semestre I)']
  codigo_tra varchar(20) [note: 'Código alfanumérico sintetizado (Ej. T-INI, T-1, T-2, SEM-1, TRM-1)']
  nombre_tra varchar(100) [not null, note: 'Nombre oficial del nivel (Ej. Trayecto Inicial, Trayecto I, Trayecto II, Semestre I, Tramo I)']
  numero_orden_tra integer [not null, note: 'Número correlativo para ordenamiento cronológico (Ej. 0, 1, 2, 3, 4, 5)']

  tpd_id integer [not null, note: 'Modalidad académica a la que pertenece este trayecto (Ref: tipo_periodo)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table eje_curricular {
  id_ecu integer [primary key, increment, note: 'Identificador del eje curricular formativo']
  nombre_ecu varchar(100) [not null, note: 'Nombre del eje (Ej. Eje Profesional, Eje de Proyecto, Eje Socio-Crítico, Eje Estético-Lúdico)']
  codigo_ecu varchar(30) [note: 'Código alfanumérico del eje']
  descripcion_ecu text [note: 'Descripción o propósito formativo del eje']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table pnf {
  id_pnf integer [primary key, increment, note: 'Identificador único de la carrera']
  codigo_pnf varchar(30) [note: 'Código correlativo interno o ministerial de la carrera']
  nombre_pnf varchar(255) [not null, note: 'Denominación completa (Ej. PNF en Agroalimentación)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tipo_unidad_curricular {
  id_tuc integer [primary key, increment, note: 'Identificador del tipo de unidad curricular']
  nombre_tuc varchar(150) [not null, note: 'Nombre del tipo (Ej. Teórica, Práctica, Proyecto)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table unidad_curricular {
  id_unc integer [primary key, increment, note: 'Identificador de la materia base del catálogo universal']
  codigo_unc varchar(30) [note: 'Alfanumérico referencial único (Ej. ALG-101)']
  nombre_unc varchar(255) [not null, note: 'Título descriptivo de la materia']
  
  tuc_id integer [note: 'Tipo de Unidad Curricular (Ref: tipo_unidad_curricular)']
  dep_id integer [note: 'Área de conocimiento responsable de dictar el contenido']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table malla_curricular {
  id_mac integer [primary key, increment, note: 'Identificador único del plan de estudios / diseño curricular cabecera']
  nombre_mac varchar(255) [not null, note: 'Nombre oficial de la malla (Ej. Malla PNF Informática 2024)']
  codigo_gaceta_mac varchar(100) [note: 'Número de Gaceta Oficial o Resolución ministerial que aprueba el pénsum']
  fecha_aprobacion_mac date [note: 'Fecha de aprobación u oficialización del plan de estudios']
  observacion_mac text [note: 'Notas sobre la vigencia, modalidad de estudio o transición de la malla']

  pnf_id integer [not null, note: 'Carrera o PNF al que pertenece este plan de estudios (Ref: pnf)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Vigente, 2=Obsoleto/Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table malla_curricular_detalle {
  id_mcd integer [primary key, increment, note: 'Identificador único del renglón/materia configurada dentro de una malla']
  unidades_credito_mcd integer [not null, note: 'Unidades de crédito (UC) otorgadas por la materia en esta malla específica']
  htea_mcd integer [note: 'Horas de Trabajo Estudiantil Acompañado / Asistidas por docente semanales']
  htei_mcd integer [note: 'Horas de Trabajo Estudiantil Independiente / Estudio autónomo semanales']
  thte_mcd integer [note: 'Total de Horas de Trabajo Estudiantil semanales (HTEA + HTEI)']
  duracion_semanas_mcd integer [note: 'Duración en semanas lectivas de la materia en esta malla (Ej. 12, 16, 36 semanas)']

  mac_id integer [not null, note: 'Plan de estudios cabecera al que pertenece esta materia (Ref: malla_curricular)']
  unc_id integer [not null, note: 'Materia universal del catálogo maestro (Ref: unidad_curricular)']
  tra_id integer [not null, note: 'Trayecto o nivel en el que se imparte la materia en esta malla (Ref: trayecto)']
  ecu_id integer [note: 'Eje curricular formativo asignado a la materia en esta malla (Ref: eje_curricular)']
  esm_id integer [note: 'Escala de evaluación y nota aprobatoria asignada a la materia en esta malla (Ref: escala_medicion)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (mac_id, unc_id, tra_id) [unique, note: 'Garantiza que una misma materia no se repita dos veces en el mismo trayecto de la misma malla']
  }
}

// ==========================================
// MÓDULO 7: GESTIÓN DEL TIEMPO
// ==========================================
Table ano_academico {
  id_ana integer [primary key, increment, note: 'Identificador del macro-ciclo institucional']
  nombre_ana varchar(255) [note: 'Etiqueta del año (Ej. Período Fiscal/Académico 2026)']
  fecha_inicio_ana date [note: 'Apertura global de operaciones para el año']
  fecha_fin_ana date [note: 'Cierre global de operaciones para el año']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table lapso_academico {
  id_laa integer [primary key, increment, note: 'Identificador del periodo lectivo corto']
  codigo_laa varchar(30) [not null, note: 'Código alfanumérico estandarizado del lapso (Ej. 2026-I, 2026-T1, 2026-INT)']
  nombre_laa varchar(255) [not null, note: 'Etiqueta o denominación completa (Ej. Primer Semestre Regular 2026, Intensivo Verano 2026)']
  fecha_inicio_laa date [not null, note: 'Día oficial de inicio de clases regulares']
  fecha_fin_laa date [not null, note: 'Día oficial de fin de clases y evaluaciones']
  fase_operativa_laa varchar(50) [default: 'Planificado', note: 'Ciclo de vida: Planificado, Preinscripciones, Inscripciones, En Cursada, Cierre Notas, Historico']

  ana_id integer [not null, note: 'Año macro al que pertenece estructuralmente (Ref: ano_academico)']
  tpd_id integer [not null, note: 'Modalidad paramétrica del lapso (Ref: tipo_periodo)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table evento_calendario {
  id_evc integer [primary key, increment, note: 'Identificador de hitos administrativos']
  tipo_evento_evc varchar(255) [note: 'Categorización operativa (Inscripciones, Carga Notas, Retiros)']
  fecha_inicio_evc date [note: 'Apertura del sistema para esta acción']
  fecha_fin_evc date [note: 'Cierre automático y bloqueo de la acción']

  laa_id integer [not null, note: 'Periodo lectivo afectado por el hito']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 8: ACTORES E INFRAESTRUCTURA
// ==========================================
Table tipo_telefono {
  id_tte integer [primary key, increment, note: 'Identificador único del tipo de teléfono (Ej. Móvil, Habitación, Trabajo)']
  nombre_tte varchar(100) [not null, note: 'Nombre o clasificación del teléfono (Ej. Móvil Personal, Fijo Habitación, Trabajo/Oficina, Emergencia)']
  descripcion_tte text [note: 'Descripción opcional del uso de este tipo de contacto']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha y hora de la última modificación del registro']
  deleted_at timestamptz [note: 'Fecha y hora del borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que realizó la última actualización']
}

Table telefono_persona {
  id_tpe integer [primary key, increment, note: 'Identificador único del registro de teléfono asignado']
  numero_tpe varchar(30) [not null, note: 'Número telefónico completo con código de área o formato internacional (Ej. 0414-1234567, +58-255-6611223)']
  principal_tpe boolean [default: false, note: 'Indica si este número es el contacto telefónico principal del ciudadano (true/false)']
  observacion_tpe text [note: 'Notas adicionales (Ej. Atiende en horario de oficina, Teléfono del representante/madre)']

  per_id integer [not null, note: 'Persona a la cual pertenece o está asociada la línea telefónica (Ref: persona)']
  tte_id integer [not null, note: 'Clasificación del tipo de teléfono (Ref: tipo_telefono)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha y hora de la última modificación del registro']
  deleted_at timestamptz [note: 'Fecha y hora del borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que realizó la última actualización']

  indexes {
    (per_id, numero_tpe, tte_id) [unique, note: 'Evita asociar el mismo número y tipo más de una vez a la misma persona']
  }
}

Table persona {
  id_per integer [primary key, increment, note: 'Identidad base compartida para evitar duplicación demográfica de cualquier ciudadano físico en el sistema']
  cedula_per varchar(15) [unique, not null, note: 'Número de Cédula de Identidad o Pasaporte con prefijo (Ej. V-12345678, E-87654321)']
  nacionalidad_per varchar(1) [default: 'V', note: 'Nacionalidad de origen de la persona (V=Venezolano, E=Extranjero)']
  documento_per varchar(50) [note: 'Número alternativo de documento de identificación (Ej. RIF personal, número de pasaporte o carnet de extranjería)']
  nombres_per varchar(255) [not null, note: 'Nombres legales completos del ciudadano según documento de identidad']
  apellidos_per varchar(255) [not null, note: 'Apellidos legales completos del ciudadano según documento de identidad']
  fecha_nacimiento_per date [note: 'Fecha oficial de nacimiento del ciudadano para cálculo de edad y estadísticas demográficas']
  genero_per varchar(20) [note: 'Género o sexo biológico/legal del ciudadano (Ej. Masculino, Femenino)']
  estado_civil_per varchar(30) [note: 'Estado civil de la persona (Ej. Soltero(a), Casado(a), Divorciado(a), Viudo(a), Concubinato)']
  correo_per varchar(255) [note: 'Correo electrónico de contacto personal del ciudadano']
  direccion_per text [note: 'Dirección física detallada del domicilio/residencia actual del ciudadano']
  foto_per text [note: 'Ruta o URL del archivo con la imagen/fotografía de perfil o carnet del ciudadano']
  antecedentes_penales_per boolean [default: false, note: 'Indica si la persona posee constancia/registro de antecedentes penales']

  etn_id integer [note: 'Clave foránea a etnia para clasificación de pueblos originarios (Ref: etnia)']
  dis_id integer [note: 'Clave foránea a discapacidad para requerimientos de accesibilidad o reportes (Ref: discapacidad)']
  nacimiento_loc_id integer [note: 'Clave foránea a la localidad geográfica de nacimiento para perfil sociodemográfico (Ref: localidad)']
  loc_id integer [note: 'Clave foránea a la localidad de residencia actual del ciudadano (Ref: localidad)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha y hora de la última modificación del registro']
  deleted_at timestamptz [note: 'Fecha y hora del borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que realizó la última actualización']
}

Table user {
  id_use integer [primary key, increment, note: 'Credencial técnica de acceso al sistema (Laravel Fortify)']
  email_use varchar(255) [unique, not null, note: 'Identificador de login único']
  password_use varchar(255) [not null, note: 'Hash bcrypt o argon2 de seguridad']

  per_id integer [not null, unique, note: 'Enlace estricto 1:1 con el ciudadano físico']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table estudiante {
  id_est integer [primary key, increment, note: 'Identificador autoincremental único del perfil académico del alumno']
  fecha_ingreso_est date [not null, note: 'Fecha oficial de la primera matriculación o ingreso institucional del alumno']
  sni_est varchar(30) [note: 'Código asignado por el Sistema Nacional de Ingreso de la OPSU (Ej. SNI-2024-102938)']
  ano_egreso_bachiller_est integer [note: 'Año oficial de graduación de Educación Media / Bachillerato (Ej. 2023)']
  privado_libertad_est boolean [default: false, note: 'Indica si el estudiante cursa estudios bajo régimen de reclusión o centro penitenciario (true/false)']
  ira_historico_est numeric(5,2) [note: 'Índice de Rendimiento Académico (IRA) acumulado histórico proveniente de la base de datos anterior']

  per_id integer [unique, not null, note: 'Clave foránea 1:1 a persona para los datos demográficos y de identidad (Ref: persona)']
  reb_id integer [note: 'Clave foránea a rama_estudio_bachiller para la mención de educación media (Ref: rama_estudio_bachiller)']
  seb_id integer [note: 'Clave foránea a sistema_estudio_bachiller para la modalidad de secundaria (Ref: sistema_estudio_bachiller)']
  bachillerato_loc_id integer [note: 'Clave foránea a la localidad geográfica donde el alumno cursó el bachillerato (Ref: localidad)']
  cos_ingreso_id integer [note: 'Clave foránea a la cohorte y oferta de sede con la que ingresó el estudiante (Ref: cohorte_sede)']
  laa_ingreso_id integer [note: 'Clave foránea al lapso académico inicial en el que arrancó el estudiante (Ref: lapso_academico)']
  laa_egreso_id integer [note: 'Clave foránea al lapso académico en el cual egresó o culminó sus estudios (Nullable, Ref: lapso_academico)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo, 3=Egresado, etc.)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha y hora de creación del registro en el sistema']
  updated_at timestamptz [note: 'Fecha y hora de la última modificación del registro']
  deleted_at timestamptz [note: 'Fecha y hora del borrado lógico (Soft Delete)']
  created_id integer [note: 'ID del usuario del sistema que creó el registro']
  updated_id integer [note: 'ID del usuario del sistema que realizó la última actualización']
}

Table profesor {
  id_pro integer [primary key, increment, note: 'Perfil laboral y académico del docente']
  especialidad_pro varchar(255) [note: 'Dominio de conocimiento principal']

  per_id integer [unique, not null, note: 'Ciudadano que asume el rol de profesor']
  dep_id integer [note: 'Área a la que reporta administrativamente']
  cla_id integer [note: 'Tipo de contrato institucional']
  cad_id integer [note: 'Nivel en el escalafón universitario']
  ded_id integer [note: 'Régimen horario detallado']
  prf_id integer [note: 'Título de pregrado o posgrado habilitante']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table aula {
  id_aul integer [primary key, increment, note: 'Espacio físico para planificación de horarios']
  codigo_aula_aul varchar(255) [note: 'Nomenclatura física de la puerta (Ej. LAB-REDES-1)']
  capacidad_maxima_aul integer [note: 'Límite de pupitres para control de sobrepoblación en secciones']
  tipo_espacio_aul varchar(255) [note: 'Naturaleza del ambiente (Clase Teórica, Taller, Cancha)']

  sed_id integer [not null, note: 'Ubicación física en un núcleo específico']
  tia_id integer [note: 'Tipo de ambiente físico / aula (Ref: tipo_aula)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 9: OFERTA, PLANIFICACIÓN E INSCRIPCIÓN
// ==========================================
Table seccion {
  id_sec integer [primary key, increment, note: 'Agrupación macro de alumnos para un trayecto']
  nivel_sec integer [note: 'Semestre o trayecto base esperado (Ej. Trayecto 1)']
  nombre_sec varchar(255) [note: 'Nomenclatura administrativa (Ej. INF-1A-D)']
  turno_sec varchar(255) [note: 'Bloque horario general (Mañana, Tarde, Noche)']
  cupo_maximo_sec integer [note: 'Límite total de matriculados permitidos en el bloque']

  laa_id integer [not null, note: 'Periodo lectivo de existencia de la sección']
  pnf_id integer [not null, note: 'Carrera a la que pertenece el grupo']
  sed_id integer [not null, note: 'Núcleo donde verán clases físicamente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table carga_academica {
  id_caa integer [primary key, increment, note: 'Triangulación de la unidad mínima de enseñanza']
  sec_id integer [not null, note: 'Bloque de alumnos receptor']
  unc_id integer [not null, note: 'Materia específica impartida']
  pro_id integer [not null, note: 'Docente responsable de evaluar']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (sec_id, unc_id, pro_id) [unique, note: 'Impide asignar al mismo profesor a la misma materia en la misma sección dos veces']
  }
}

Table horario {
  id_hor integer [primary key, increment, note: 'Bloques de tiempo físicos para una materia']
  dia_semana_hor varchar(255) [note: 'Día de concurrencia (Ej. Lunes)']
  hora_inicio_hor time [note: 'Hora de entrada (Formato 24h)']
  hora_fin_hor time [note: 'Hora de salida (Formato 24h)']

  caa_id integer [not null, note: 'Clase que se está programando']
  aul_id integer [not null, note: 'Espacio físico asignado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tipo_inscripcion {
  id_tpi integer [primary key, increment, note: 'Identificador único de la modalidad/tipo de inscripción']
  nombre_tpi varchar(100) [not null, note: 'Nombre oficial (Ej. Regular, Reingreso, Nuevo Ingreso, Programa Especial PER, Convalidación, Arrastre)']
  codigo_tpi varchar(30) [note: 'Código alfanumérico referencial (Ej. REG, REI, NING, PER, CONV, ARR)']
  descripcion_tpi text [note: 'Descripción o condiciones normativas de la modalidad']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table inscripcion {
  id_ins integer [primary key, increment, note: 'Cabecera del contrato de matriculación. NOTA: Backend (Observers/FormRequests) valida coherencia entre PNF/Lapso de cabecera y secciones del detalle']
  fecha_inscripcion_ins timestamptz [note: 'Cuándo formalizó el trámite']
  observacion_ins text [note: 'Notas u observaciones administrativas de la inscripción']
  motivo_inactivacion_ins text [note: 'Justificación legal/administrativa en caso de anulación total de la inscripción']

  est_id integer [not null, note: 'Alumno que solicita cursar estudios']
  laa_id integer [not null, note: 'Periodo para el cual se compromete']
  pnf_id integer [not null, note: 'Carrera por la que avanza en este periodo']
  tpi_id integer [not null, note: 'Modalidad estandarizada de inscripción (Ref: tipo_inscripcion)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activa, 2=Inactiva/Anulada)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (est_id, laa_id, pnf_id) [unique, note: 'Garantiza un solo comprobante de inscripción por estudiante, lapso y carrera']
  }
}

Table inscripcion_detalle {
  id_ind integer [primary key, increment, note: 'Línea específica de la materia inscrita. NOTA: Coherencia entre cabecera y detalle es validada por el backend']
  estatus_cursada_ind varchar(255) [note: 'Estado de la línea (Cursando, Aprobado, Reprobado, Retirado, Exonerado)']
  nota_final_ind numeric(4,2) [note: 'Calificación definitiva calculada al cierre (Escala original)']
  nota_final_20_ind numeric(4,2) [note: 'Calificación definitiva equivalente en escala base 20 pts (para auditoría y promedios)']
  nota_final_100_ind numeric(5,2) [note: 'Calificación definitiva equivalente en escala base 100%']
  porcentaje_inasistencia_ind numeric(5,2) [note: 'Acumulado de inasistencias registrado por el profesor']
  perdio_por_inasistencia_ind boolean [default: false, note: 'Bandera técnica que fuerza la reprobación por inasistencia masiva']
  motivo_inactivacion_ind text [note: 'Causa o justificación de retiro/desincorporación específica de esta asignatura']

  ins_id integer [not null, note: 'Cabecera a la que pertenece esta línea']
  caa_id integer [not null, note: 'Profesor/Materia exacta en la que fue incluido']
  acc_id integer [note: 'NULLABLE: Se vincula cuando el lapso termina y la nota es legal']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (ins_id, caa_id) [unique, note: 'Impide inscribir la misma materia dos veces en el mismo comprobante']
  }
}

// ==========================================
// MÓDULO 10: EVALUACIONES Y NOTAS
// ==========================================
Table corte_lapso {
  id_col integer [primary key, increment, note: 'Regla obligatoria de fraccionamiento de lapso']
  numero_corte_col integer [note: 'Orden secuencial (Ej. Corte 1, Corte 2)']
  porcentaje_valor_col numeric [note: 'Peso institucional de este bloque (Ej. 25% del total)']
  fecha_apertura_notas_col timestamptz [note: 'Momento en que el sistema permite ingresar calificaciones']
  fecha_cierre_notas_col timestamptz [note: 'Bloqueo automático del sistema para evitar rezagos']

  laa_id integer [not null, note: 'Periodo al que aplica esta regla divisional']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table plan_evaluacion {
  id_ple integer [primary key, increment, note: 'Actividad específica diseñada por el docente']
  descripcion_ple varchar(255) [note: 'Título descriptivo (Ej. Prueba Práctica de SQL)']
  tipo_estrategia_ple varchar(255) [note: 'Clasificación didáctica (Examen, Taller, Informe)']
  porcentaje_asignado_ple numeric [note: 'Peso que le dio el profesor (Debe sumar máximo el total del corte)']
  fecha_evaluacion_ple date [note: 'Día planificado para la aplicación con los alumnos']

  caa_id integer [not null, note: 'Clase particular donde se aplica (Profesor+Materia)']
  col_id integer [not null, note: 'Bloque sumativo al que abona esta actividad']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table calificacion {
  id_cal integer [primary key, increment, note: 'Calificación individual por actividad']
  estatus_entrega_cal varchar(255) [note: 'Estado físico (Entregado, Pendiente, No Entregó)']
  fecha_entrega_cal timestamptz [note: 'Registro de cuándo se recibió el material (si aplica)']
  nota_obtenida numeric [note: 'Valor puro asignado por el docente (sin promediar)']

  ple_id integer [not null, note: 'Actividad evaluativa origen']
  ind_id integer [not null, note: 'Estudiante específico evaluado']
  use_id integer [note: 'Auditoría: ID del usuario (profesor/admin) que tecleó la nota']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (ple_id, ind_id) [unique, note: 'Impide tener dos notas para la misma actividad en el mismo alumno']
  }
}

Table calificacion_corte {
  id_cco integer [primary key, increment, note: 'Calificación acumulada sumativa por estudiante en un corte evaluativo del lapso']
  nota_corte_20_cco numeric(4,2) [note: 'Nota acumulada en el corte llevada a base 20 pts']
  nota_corte_100_cco numeric(5,2) [note: 'Nota acumulada en el corte llevada a base 100%']
  porcentaje_acumulado_cco numeric(5,2) [note: 'Porcentaje sumatorio alcanzado sobre el peso del corte']
  observacion_cco text [note: 'Notas u observaciones del docente sobre el desempeño del alumno en este corte']

  ind_id integer [not null, note: 'Línea de materia e inscripción del estudiante (Ref: inscripcion_detalle)']
  col_id integer [not null, note: 'Corte evaluativo institucional al que corresponde esta nota (Ref: corte_lapso)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (ind_id, col_id) [unique, note: 'Garantiza una sola nota consolidada por estudiante y corte en cada materia']
  }
}

// ==========================================
// MÓDULO 11: LEGALIDAD ACADÉMICA (ACTAS)
// ==========================================
Table libro_acta {
  id_lia integer [primary key, increment, note: 'Repositorio macro para conservación de actas impresas']
  numero_libro_lia varchar(255) [note: 'Serial físico o digital del tomo (Ej. LIB-INF-05)']
  ano_apertura_lia integer [note: 'Año civil en el que se inauguró el libro']

  pnf_id integer [not null, note: 'Carrera a la que pertenece el libro']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table acta_calificacion {
  id_acc integer [primary key, increment, note: 'Documento legal inmutable que sella las notas definitivas']
  numero_acta_acc varchar(255) [note: 'Serial único del acta ante el ministerio']
  numero_folio_acc varchar(255) [note: 'Número de página exacta dentro del libro_acta']
  fecha_emision_acc timestamptz [note: 'Momento de sellado digital']
  tipo_acta_acc varchar(255) [note: 'Naturaleza de la evaluación (Regular, PER, Equivalencia)']

  lia_id integer [not null, note: 'Tomo donde se engrapa esta acta física']
  caa_id integer [note: 'NULLABLE: Materia y profesor del curso regular (opcional si proviene de PER)']
  pir_id integer [note: 'NULLABLE: Vinculación si el acta proviene de un examen extraordinario/PER']
  cerrada_por_use_id integer [note: 'Auditoría: ID del usuario que presionó el botón de cierre legal']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 12: EXPEDIENTES Y TRÁMITES
// ==========================================
Table documento_requisito {
  id_dor integer [primary key, increment, note: 'Catálogo de exigencias legales']
  nombre_dor varchar(255) [note: 'Denominación del papel (Fondo Negro, Partida de Nacimiento)']
  es_obligatorio_ingreso_dor boolean [note: 'Si es True, bloquea la inscripción inicial sin consignarlo']
  es_obligatorio_egreso_dor boolean [note: 'Si es True, bloquea la solicitud de grado sin consignarlo']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table expediente_estudiante {
  id_exe integer [primary key, increment, note: 'Control de recepción física de carpetas']
  fecha_recepcion_exe date [note: 'Cuándo se dejó en taquilla']
  estatus_documento_exe varchar(255) [note: 'Validación visual (Legible, Deteriorado, Válido)']

  est_id integer [not null, note: 'Dueño del expediente']
  dor_id integer [not null, note: 'Papel que está siendo consignado']
  verificado_por_use_id integer [note: 'Auditoría: ID del empleado de control de estudios que revisó el original']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (est_id, dor_id) [unique, note: 'Impide consignar el mismo requisito múltiples veces para el mismo alumno']
  }
}

Table tramite_academico {
  id_tra integer [primary key, increment, note: 'Gestión de taquilla virtual o física']
  tipo_tramite_tra varchar(255) [note: 'Naturaleza de la petición (Constancia, Retiro, Cambio)']
  fecha_solicitud_tra timestamptz [note: 'Momento en que el alumno inició la petición']
  estatus_tramite_tra varchar(255) [note: 'Flujo de trabajo (En Revisión, Aprobado, Entregado)']
  observacion_tra text [note: 'Causa de rechazo o notas operativas de taquilla']
  datos_tramite_tra jsonb [note: 'NUEVO: Almacena variables dinámicas (Ej. PNF origen y PNF destino para traslados)']

  est_id integer [not null, note: 'Solicitante del trámite']
  car_id integer [note: 'Causa o motivo de retiro si aplica (Ref: causa_retiro)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 13: EGRESOS, PROMOCIONES Y GRADOS
// ==========================================
Table titulo_obtenido {
  id_tio integer [primary key, increment, note: 'Catálogo de denominaciones de grado']
  nombre_tio varchar(255) [not null, note: 'Denominación legal (Ej. Ingeniero en Informática)']
  tipo_grado_tio varchar(255) [note: 'Nivel académico (TSU, Licenciatura, Posgrado)']
  gaceta_tio varchar(100) [note: 'Número de Gaceta Oficial de aprobación del título']
  fecha_gaceta_tio date [note: 'Fecha de publicación de la Gaceta Oficial']
  resolucion_tio varchar(100) [note: 'Número de Resolución Ministerial']
  fecha_resolucion_tio date [note: 'Fecha de la Resolución Ministerial']

  pnf_id integer [not null, note: 'Carrera que emite el título']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table salida_intermedia {
  id_sai integer [primary key, increment, note: 'Certificaciones sin acto de grado formal']
  nombre_sai varchar(255) [note: 'Ej. Asistente Técnico en Mantenimiento']
  tipo_sai varchar(255) [note: 'Naturaleza del certificado']

  pnf_id integer [not null, note: 'Carrera base']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table causa_retiro {
  id_car integer [primary key, increment, note: 'Identificador único de la causa o motivo de retiro']
  nombre_car varchar(150) [not null, note: 'Nombre de la causa (Ej. Salud, Económica, Traslado, Voluntaria)']
  codigo_car varchar(30) [note: 'Alfanumérico referencial (Ej. RET-MED, RET-ECO)']
  descripcion_car text [note: 'Detalle o justificativo normativo de la causa']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table noticia {
  id_not integer [primary key, increment, note: 'Identificador del aviso o noticia']
  titulo_not varchar(255) [not null, note: 'Titular o asunto de la noticia']
  contenido_not text [not null, note: 'Cuerpo detallado del mensaje o aviso']
  fecha_publicacion_not timestamptz [default: \`now()\`, note: 'Fecha y hora de publicación visible']

  use_id integer [note: 'Usuario autor del aviso (Ref: user)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table condicion_residencia {
  id_cor integer [primary key, increment, note: 'Identificador único de la condición habitacional de residencia']
  nombre_cor varchar(150) [not null, note: 'Nombre (Ej. Interno, Con Familia, Alquilado, Residencia Estudiantil)']
  codigo_cor varchar(30) [note: 'Alfanumérico referencial (Ej. RES-INT, RES-FAM)']
  descripcion_cor text [note: 'Detalle sobre la modalidad habitacional']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tipo_aula {
  id_tia integer [primary key, increment, note: 'Identificador único del tipo de aula o ambiente físico']
  nombre_tia varchar(150) [not null, note: 'Nombre del tipo (Ej. Aula Teórica, Laboratorio de Computación, Taller, Cancha, Módulo de Salud)']
  codigo_tia varchar(30) [note: 'Alfanumérico referencial (Ej. TUL-TEO, TUL-LAB, TUL-TAL)']
  descripcion_tia text [note: 'Especificaciones de equipamiento o uso del ambiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table notificacion_correo {
  id_nco integer [primary key, increment, note: 'Identificador único de la notificación o correo en cola de envío']
  destinatario_nco varchar(255) [not null, note: 'Dirección de correo electrónico de destino']
  asunto_nco varchar(255) [not null, note: 'Asunto de la notificación o correo']
  cuerpo_nco text [not null, note: 'Contenido HTML o texto del mensaje']
  estatus_envio_nco varchar(50) [default: 'Pendiente', note: 'Estado de procesamiento (Pendiente, Enviado, Fallido)']
  fecha_envio_nco timestamptz [note: 'Momento en que se envió efectivamente el mensaje']

  use_id integer [note: 'Usuario destinatario si aplica (Ref: user)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table promocion {
  id_prm integer [primary key, increment, note: 'Cabecera del acto de grado masivo']
  nombre_prm varchar(255) [not null, note: 'Etiqueta del acto (Ej. Promoción Bicentenario)']
  fecha_egreso_prm date [note: 'Fecha legal impresa en el título']
  tipo_promocion_prm varchar(255) [note: 'Ordinaria, Extraordinaria, Secretaría']
  tomo_prm varchar(255) [note: 'Tomo central del registro principal']
  cantidad_egresado_prm integer [note: 'Cálculo desnormalizado de asistencia masiva']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table promocion_pnf {
  id_prp integer [primary key, increment, note: 'División del acto de grado por carreras']
  cantidad_egresado_prp integer [note: 'Número exacto de graduandos en este lote']

  prm_id integer [not null, note: 'Acto de grado macro']
  tio_id integer [not null, note: 'Título que recibirán este grupo']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table promocion_estudiante {
  id_pre integer [primary key, increment, note: 'Detalle individual de egreso']
  posicion_pre integer [note: 'Puesto en el orden de mérito o llamada al podio']
  tomo_pre varchar(255) [note: 'Libro específico donde asentó firma']
  folio_pre varchar(255) [note: 'Página donde asentó firma']
  ira_pre numeric [note: 'Índice de Rendimiento Académico al momento de egresar']
  tipo_graduando_pre varchar(255) [note: 'Regular, Honorífico']

  prp_id integer [not null, note: 'Lote al que pertenece el graduando']
  est_id integer [not null, note: 'Alumno que finaliza estudios']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table estatus_solicitud_grado {
  id_esg integer [primary key, increment, note: 'Identificador único del estado del flujo de solicitud de grado']
  nombre_esg varchar(100) [not null, note: 'Nombre del estado (Ej. Pendiente, En Revisión, Aprobada, Rechazada, Finalizada)']
  codigo_esg varchar(30) [note: 'Código alfanumérico referencial (Ej. PEN, REV, APR, REC, FIN)']
  descripcion_esg text [note: 'Descripción o reglas de negocio asociadas al estado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table solicitud_grado {
  id_sog integer [primary key, increment, note: 'Identificador único de la petición formal de grado']
  fecha_solicitud_sog date [not null, note: 'Fecha en que el alumno formalizó la petición']
  fecha_cita_sog timestamptz [note: 'Fecha y hora programada para cita presencial/revisión en taquilla']
  fecha_proceso_sog timestamptz [note: 'Fecha y hora exacta en que se procesó/aprobó la solicitud']
  observacion_sog text [note: 'Observaciones administrativas o motivos de rechazo del expediente']

  est_id integer [not null, note: 'Aspirante a título (Ref: estudiante)']
  pnf_id integer [not null, note: 'Carrera que pretende culminar (Ref: pnf)']
  prm_id integer [not null, note: 'Acto de grado/promoción a la que aspira ingresar (Ref: promocion)']
  tio_id integer [not null, note: 'Título académico al que opta el estudiante (Ref: titulo_obtenido)']
  sed_id integer [not null, note: 'Sede/Núcleo donde tramita el grado (Ref: sede)']
  mac_id integer [not null, note: 'Plan de estudios/malla con la que egresa el estudiante (Ref: malla_curricular)']
  esg_id integer [not null, note: 'Estado paramétrico del flujo del trámite (Ref: estatus_solicitud_grado)']
  aprobada_por_use_id integer [note: 'Auditoría: ID del usuario administrativo que aprobó la solicitud (Ref: user)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status, 1=Activo, 2=Inactivo)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 14: SEGUIMIENTO Y EQUIVALENCIAS
// ==========================================
Table historial_estatus_estudiante {
  id_hee integer [primary key, increment, note: 'Log longitudinal inmutable de cambios de vida estudiantil']
  estatus_anterior_hee varchar(255) [note: 'Situación legal previa (Ej. Regular)']
  estatus_nuevo_hee varchar(255) [note: 'Situación legal resultante (Ej. Retirado, Suspendido)']
  fecha_cambio_hee timestamptz [note: 'Momento exacto en que el sistema procesó el cambio']
  motivo_hee text [note: 'Justificación legal o administrativa de la modificación']

  est_id integer [not null, note: 'Afectado por el cambio']
  laa_id integer [note: 'NULLABLE: Lapso en el que ocurre el evento (si aplica)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table equivalencia_academica {
  id_eqa integer [primary key, increment, note: 'Homologación de saberes de otras instituciones']
  nota_reconocida_eqa numeric [note: 'Calificación asentada según la escala origen/destino']
  institucion_origen_eqa varchar(255) [note: 'Universidad donde cursó originalmente']
  fecha_aprobacion_eqa date [note: 'Día del acta de consejo directivo que avala']
  resolucion_oficial_eqa varchar(255) [note: 'Número de oficio o gaceta institucional de aprobación']

  est_id integer [not null, note: 'Beneficiario del reconocimiento']
  unc_id integer [not null, note: 'Materia del PNF que se da por aprobada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 15: ADMISIÓN Y ASISTENCIA
// ==========================================
Table proceso_admision {
  id_pra integer [primary key, increment, note: 'Sala de espera para pre-inscritos y asignados']
  via_ingreso_pra varchar(255) [note: 'Mecanismo de entrada (Ej. OPSU, Censo Interno, Equivalencia)']
  fecha_solicitud_pra date [note: 'Registro de la intención']
  baremo_opsu_pra numeric [note: 'Puntuación del sistema nacional de ingreso']

  laa_id integer [not null, note: 'Periodo objetivo de ingreso']
  pnf_id integer [not null, note: 'Carrera deseada o asignada']
  per_id integer [not null, note: 'Ciudadano registrado temporal o permanentemente en el sistema']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table asistencia_clase {
  id_asc integer [primary key, increment, note: 'Línea de verificación de encuentros en aula']
  fecha_clase_asc date [note: 'Día exacto calendario de la clase']
  estatus_asistencia_asc varchar(255) [note: 'Presente, Ausente, Justificado, Fuga']
  observacion_asc text [note: 'Anotación del docente sobre la inasistencia']

  hor_id integer [not null, note: 'Bloque de horas específico del día programado']
  ind_id integer [not null, note: 'Apunta al récord de inscripción del estudiante']
  registrado_por_use_id integer [note: 'Auditoría: ID del user profesor que tomó lista']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table perfil_bienestar {
  id_peb integer [primary key, increment, note: 'Ficha médica y de prevención de emergencias']
  tipo_sangre_peb varchar(255) [note: 'Grupo y factor Rh (Vital para prácticas de campo)']
  alergias_peb text [note: 'Alergias medicamentosas o ambientales severas']
  condicion_medica_peb text [note: 'Enfermedades crónicas, discapacidades funcionales o embarazos']
  contacto_emergencia_nombre_peb varchar(255) [note: 'A quién localizar en caso de accidente']
  contacto_emergencia_telefono_peb varchar(20) [note: 'Línea directa del contacto']
  contacto_emergencia_parentesco_peb varchar(255) [note: 'Vínculo con el estudiante (Padre, Esposo)']

  est_id integer [unique, not null, note: 'Anexo de seguridad 1:1 con el estudiante']
  cor_id integer [note: 'Condición habitacional / residencia (Ref: condicion_residencia)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 16: PROYECTO PNF Y PER
// ==========================================
Table proyecto_investigacion {
  id_pri integer [primary key, increment, note: 'Cabecera del Trabajo Socio-Tecnológico o Tesis']
  titulo_pri text [note: 'Título formal y aprobado de la investigación']
  comunidad_abordada_pri varchar(255) [note: 'Consejo comunal, empresa o sector beneficiado (Típico en PNF)']
  estatus_proyecto_pri varchar(255) [note: 'Fase de avance (Inscrito, Capítulos I-III, Defensa, Aprobado)']
  fecha_defensa_pri date [note: 'Día programado para la evaluación pública']
  calificacion_final_pri numeric [note: 'Nota consensuada por el comité evaluador']

  pnf_id integer [not null, note: 'Carrera matriz del proyecto']
  laa_id integer [not null, note: 'Periodo de inscripción o defensa final']
  tutor_academico_pro_id integer [note: 'Profesor asesor guía de la universidad']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table integrante_proyecto {
  id_inp integer [primary key, increment, note: 'Desglose de autores del proyecto (Típicamente grupos)']
  rol_inp varchar(255) [note: 'Líder, Desarrollador, Metodólogo (Opcional)']

  pri_id integer [not null, note: 'Trabajo al que pertenecen']
  est_id integer [not null, note: 'Co-autor']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (pri_id, est_id) [unique, note: 'Evita asignar al mismo estudiante dos veces como co-autor']
  }
}

Table jurado_proyecto {
  id_jup integer [primary key, increment, note: 'Panel docente encargado de la calificación']
  rol_jurado_jup varchar(255) [note: 'Presidente, Evaluador Principal, Suplente']

  pri_id integer [not null, note: 'Trabajo que evaluarán']
  pro_id integer [not null, note: 'Miembro del tribunal']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (pri_id, pro_id) [unique, note: 'Evita asignar al mismo docente dos veces en el mismo tribunal']
  }
}

Table programa_especial_recuperacion {
  id_pir integer [primary key, increment, note: 'Cabecera para evaluación extraordinaria (Mesa, PER, Suficiencia)']
  tipo_per_pir varchar(255) [note: 'Recuperación de arrastre, Examen Libre, Suficiencia']
  fecha_evaluacion_pir timestamptz [note: 'Momento de aplicación de la prueba única']
  cupo_maximo_pir integer [note: 'Límite operativo de alumnos para esa evaluación']

  unc_id integer [not null, note: 'Materia en disputa']
  laa_id integer [not null, note: 'Periodo de apertura del instrumento']
  pro_id integer [not null, note: 'Docente aplicador y corrector']
  acc_id integer [note: 'NULLABLE: Acta legal única donde se vaciarán estos resultados atípicos']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table inscripcion_per {
  id_ipe integer [primary key, increment, note: 'Aspirantes a recuperar la materia vía extraordinaria']
  fecha_inscripcion_ipe timestamptz [note: 'Cuándo formalizó su participación']
  nota_obtenida_ipe numeric [note: 'Calificación producto de la evaluación única']
  asistio_ipe boolean [note: 'Control de inasistencia al evento (fuerza cero ptos si False)']

  pir_id integer [not null, note: 'Evento PER']
  est_id integer [not null, note: 'Alumno con la materia pendiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (pir_id, est_id) [unique, note: 'Evita inscripciones duplicadas al mismo evento PER']
  }
}

Table regla_prelacion {
  id_rep integer [primary key, increment, note: 'Motor dinámico de requisitos académicos']
  tipo_requisito_rep varchar(255) [note: 'Aprobada (obligatoria para seguir), Cursada (permite avanzar debiendo)']
  condicion_unidades_credito_rep integer [note: 'Regla alterna: exige tener N cantidad de créditos aprobados macro en lugar de materia específica']

  unc_destino_id integer [not null, note: 'Materia que el sistema debe validar si el alumno puede cursar']
  unc_origen_id integer [not null, note: 'Materia que funge como tranca o requisito']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table bloqueo_administrativo {
  id_bla integer [primary key, increment, note: 'Retenciones operativas que congelan al estudiante']
  departamento_origen_bla varchar(255) [note: 'Ente sancionador (Biblioteca, Control de Estudios, Disciplinario)']
  motivo_bla text [note: 'Causa descriptiva (Ej. Libro no devuelto, Falta Título Fondo Negro)']
  fecha_imposicion_bla timestamptz [note: 'Inicio de la sanción']
  estatus_bloqueo_bla varchar(255) [note: 'Vigencia (Activo, Solvente, Levantado)']
  fecha_levantamiento_bla timestamptz [note: 'NULLABLE: Cuándo resolvió el inconveniente']

  est_id integer [not null, note: 'Sujeto sancionado o en deuda']
  levantado_por_use_id integer [note: 'Auditoría: ID del user que validó la solvencia y retiró el bloqueo']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 17: SEGURIDAD, AUDITORÍA Y API
// ==========================================
Table qr_validated_generated {
  id_qvg integer [primary key, increment, note: 'Registro de firmas digitales QR para documentos transaccionales']
  qr_payload_qvg text [note: 'Contenido decodificado de la imagen QR']
  verification_hash_qvg varchar(255) [note: 'Hash sha256 para validación criptográfica anti-forja']
  status_qvg varchar(255) [note: 'Estado de validez (Activo, Revocado, Expirado)']

  tra_id integer [note: 'Petición origen (Ej. Constancia de Estudio)']
  unique_id_qvg varchar(255) [unique, note: 'UUID v4 generado para la URL pública de validación']
  generado_por_use_id integer [note: 'Auditoría: ID del user del sistema que imprimió/emitió el PDF']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table qr_validated_generated_titulo {
  id_qvt integer [primary key, increment, note: 'Firma digital QR hiper-segura para pergaminos de grado']
  qr_payload_qvt text [note: 'Contenido decodificado (Folio, Tomo, Cédula, Fecha)']
  verification_hash_qvt varchar(255) [note: 'Hash de seguridad criptográfica de grado']
  status_qvt varchar(255) [note: 'Estado de validez']

  pre_id integer [note: 'Registro matriz del graduando']
  unique_id_qvt varchar(255) [unique, note: 'UUID v4 para portal público de egresados']
  generado_por_use_id integer [note: 'Autoridad o analista que emitió el lote de diplomas']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table evento {
  id_eve integer [primary key, increment, note: 'Bitácora global de auditoría tipo Syslog']
  formulario_eve varchar(255) [note: 'Pantalla o componente frontend donde ocurrió (Ej. Modulo Notas)']
  tipo_evento_eve varchar(255) [note: 'Categoría (INSERT, UPDATE, DELETE, LOGIN_FAILED)']
  observacion_eve text [note: 'Payload o volcado JSON de qué datos se alteraron']
  ip_address_eve varchar(255) [note: 'Dirección IPv4/IPv6 de origen para trazabilidad forense']

  use_id integer [note: 'ID del user responsable de la acción']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table api_system {
  id_aps integer [primary key, increment, note: 'Directorio de consumidores externos autorizados (Webhooks/REST)']
  name_aps varchar(255) [not null, note: 'Nombre del ente (Ej. Ministerio, OPSU, SNI)']
  description_aps text [note: 'Propósito de la integración']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table api_allowed_table {
  id_aat integer [primary key, increment, note: 'Lista blanca de exposición de datos (Seguridad API)']
  table_name_aat varchar(255) [not null, note: 'Nombre técnico de la tabla accesible vía API']
  description_aat text [note: 'Motivo de exposición al ente externo']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table api_key {
  id_apk integer [primary key, increment, note: 'Gestión de Tokens Bearer u OAuth (Similar a Laravel Sanctum/Passport)']
  api_key_apk varchar(255) [not null, note: 'Token cifrado o hash']
  is_active_apk boolean [default: true, note: 'Bandera de revocación de acceso']
  expires_at_apk timestamptz [note: 'Caducidad de la credencial']

  aps_id integer [not null, note: 'Ente propietario del token']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table api_permission {
  id_app integer [primary key, increment, note: 'Control de operaciones granulares por ente externo']
  can_read_app boolean [default: false, note: 'Permiso de operación SELECT/GET']
  can_write_app boolean [default: false, note: 'Permiso de operación INSERT/POST']

  aps_id integer [not null, note: 'Sistema consumidor']
  aat_id integer [not null, note: 'Tabla objetivo autorizada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table api_access_log {
  id_aal integer [primary key, increment, note: 'Rastreo estricto de consumos (Rate Limiting y Auditoría)']
  endpoint_aal varchar(255) [note: 'Ruta URL solicitada (Ej. /api/v1/egresados)']
  http_method_aal varchar(255) [note: 'Verbo HTTP utilizado (GET, POST)']
  ip_address_aal varchar(255) [note: 'IP origen de la petición externa']
  response_code_aal integer [note: 'Código HTTP devuelto (200, 401, 500)']
  accessed_at_aal timestamptz [note: 'Momento exacto de la petición de red']

  aps_id integer [not null, note: 'Ente que hizo la petición']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 18: SEGURIDAD (RBAC - Roles y Permisos)
// ==========================================
Table rol {
  id_rol integer [primary key, increment, note: 'Perfil macro de agrupación de privilegios']
  nombre_rol varchar(255) [unique, not null, note: 'Identificador estandarizado (Ej. admin, docente, taquilla)']
  descripcion_rol varchar(255) [note: 'Funciones generales del rol']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table permiso {
  id_pmi integer [primary key, increment, note: 'Operación atómica del sistema']
  nombre_pmi varchar(255) [unique, not null, note: 'Slug técnico (Ej. usuarios.crear, notas.modificar)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table rol_permiso {
  id_rop integer [primary key, increment, note: 'Tabla pivote: Asigna capacidades operativas a los roles']
  rol_id integer [not null, note: 'Perfil objetivo']
  pmi_id integer [not null, note: 'Capacidad otorgada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (rol_id, pmi_id) [unique, note: 'Evita duplicar permisos sobre un mismo rol']
  }
}

Table usuario_rol {
  id_usr integer [primary key, increment, note: 'Asignación de perfiles a cuentas operativas reales']
  use_id integer [not null, note: 'Apunta a la tabla user de Laravel']
  rol_id integer [not null, note: 'Perfil otorgado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (use_id, rol_id) [unique, note: 'Evita asignar el mismo rol a la misma cuenta más de una vez']
  }
}

// ==========================================
// MÓDULO 19: CONFIGURACIÓN GLOBAL (Clave-Valor)
// ==========================================
Table configuracion_sistema {
  id_csi integer [primary key, increment, note: 'Almacén dinámico de parámetros institucionales (Patrón Key-Value)']
  clave_csi varchar(255) [unique, not null, note: 'Llave técnica de búsqueda (Ej. capacidad_max_seccion, fecha_fin_modificaciones)']
  valor_csi text [not null, note: 'Dato almacenado en formato texto crudo']
  tipo_dato_csi varchar(255) [note: 'Cast técnico esperado (integer, boolean, date, json) para conversión en backend']
  descripcion_csi varchar(255) [note: 'Instrucciones para el administrador sobre qué altera esta variable']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 20: CLASIFICACIÓN DOCENTE / LABORAL
// ==========================================
Table condicion_laboral {
  id_cla integer [primary key, increment, note: 'Estatus del contrato laboral con la UPTP']
  nombre_cla varchar(255) [not null, note: 'Etiqueta legal (Fijo, Contratado, Jubilado Activo)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table categoria_docente {
  id_cad integer [primary key, increment, note: 'Escalafón universitario según años y credenciales']
  nombre_cad varchar(255) [not null, note: 'Nivel académico (Instructor, Asistente, Agregado, Asociado, Titular)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table dedicacion_docente {
  id_ded integer [primary key, increment, note: 'Régimen horario comprometido']
  nombre_ded varchar(255) [not null, note: 'Etiqueta macro (Tiempo Completo, Medio Tiempo, Dedicación Exclusiva)']
  horas_academicas_ded integer [note: 'Cantidad de horas exigidas obligatoriamente frente a aula']
  horas_administrativas_ded integer [note: 'Cantidad de horas exigidas para tutorías, investigación o coordinación']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table profesion {
  id_prf integer [primary key, increment, note: 'Formación académica matriz del personal']
  nombre_prf varchar(255) [not null, note: 'Título de egreso original (Ej. Licenciado en Matemática, Ing. Sistemas)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

// ==========================================
// MÓDULO 21: CENSOS E INTENSIVOS
// ==========================================
Table censo_oferta {
  id_ceo integer [primary key, increment, note: 'Cabecera de planificación para periodos atípicos (Intensivos/Avanzados)']
  cupo_minimo_requerido_ceo integer [note: 'Umbral de alumnos inscritos para justificar el pago al docente']

  laa_id integer [not null, note: 'Periodo de verano o avance destino']
  unc_id integer [not null, note: 'Materia de interés postulada']
  pnf_id integer [not null, note: 'Carrera que demanda la materia']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table censo_estudiante {
  id_cee integer [primary key, increment, note: 'Registro transaccional de intención de inscripción']
  fecha_postulacion_cee timestamptz [note: 'Momento de registro en el portal']

  ceo_id integer [not null, note: 'Oferta específica deseada']
  est_id integer [not null, note: 'Alumno comprometido a cursar (y pagar si aplica)']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']

  indexes {
    (ceo_id, est_id) [unique, note: 'Evita postulaciones duplicadas a la misma oferta de censo']
  }
}

// ==========================================
// RELACIONES (Foreign Keys)
// ==========================================

// Usuarios
Ref: user.per_id - persona.id_per [delete: restrict, update: cascade]

// Geografía
Ref: estado.pai_id > pais.id_pai [delete: restrict, update: cascade]
Ref: municipio.esd_id > estado.id_esd [delete: restrict, update: cascade]
Ref: parroquia.mun_id > municipio.id_mun [delete: restrict, update: cascade]
Ref: localidad.par_id > parroquia.id_par [delete: restrict, update: cascade]

// Institucional
Ref: sede.uni_id > universidad.id_uni [delete: restrict, update: cascade]
Ref: sede.loc_id > localidad.id_loc [delete: restrict, update: cascade]
Ref: sede_pnf.sed_id > sede.id_sed [delete: cascade, update: cascade]
Ref: sede_pnf.pnf_id > pnf.id_pnf [delete: cascade, update: cascade]
Ref: cohorte.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: cohorte_sede.coh_id > cohorte.id_coh [delete: cascade, update: cascade]
Ref: cohorte_sede.sep_id > sede_pnf.id_sep [delete: cascade, update: cascade]

// Autoridades
Ref: autoridad.per_id > persona.id_per [delete: restrict, update: cascade]
Ref: autoridad.tia_id > tipo_autoridad.id_tia [delete: restrict, update: cascade]
Ref: autoridad.car_id > cargo.id_car [delete: restrict, update: cascade]
Ref: autoridad.uni_id > universidad.id_uni [delete: restrict, update: cascade]

// Escalas
Ref: escala_nota.esm_id > escala_medicion.id_esm [delete: cascade, update: cascade]
// Académico
Ref: departamento.jefe_departamento_pro_id > profesor.id_pro [delete: restrict, update: cascade]
Ref: unidad_curricular.dep_id > departamento.id_dep [delete: restrict, update: cascade]
Ref: malla_curricular.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: trayecto.tpd_id > tipo_periodo.id_tpd [delete: restrict, update: cascade]
Ref: malla_curricular_detalle.mac_id > malla_curricular.id_mac [delete: cascade, update: cascade]
Ref: malla_curricular_detalle.unc_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: malla_curricular_detalle.tra_id > trayecto.id_tra [delete: restrict, update: cascade]
Ref: malla_curricular_detalle.ecu_id > eje_curricular.id_ecu [delete: restrict, update: cascade]
Ref: malla_curricular_detalle.esm_id > escala_medicion.id_esm [delete: restrict, update: cascade]

// Calendario
Ref: lapso_academico.ana_id > ano_academico.id_ana [delete: restrict, update: cascade]
Ref: lapso_academico.tpd_id > tipo_periodo.id_tpd [delete: restrict, update: cascade]
Ref: evento_calendario.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]

// Personas (1 a 1)
Ref: estudiante.per_id - persona.id_per [delete: restrict, update: cascade]
Ref: profesor.per_id - persona.id_per [delete: restrict, update: cascade]
Ref: profesor.dep_id > departamento.id_dep [delete: restrict, update: cascade]

// Clasificación Docente
Ref: profesor.cla_id > condicion_laboral.id_cla [delete: restrict, update: cascade]
Ref: profesor.cad_id > categoria_docente.id_cad [delete: restrict, update: cascade]
Ref: profesor.ded_id > dedicacion_docente.id_ded [delete: restrict, update: cascade]
Ref: profesor.prf_id > profesion.id_prf [delete: restrict, update: cascade]

// Gestión / Oferta
Ref: aula.sed_id > sede.id_sed [delete: restrict, update: cascade]
Ref: seccion.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: seccion.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: seccion.sed_id > sede.id_sed [delete: restrict, update: cascade]
Ref: carga_academica.sec_id > seccion.id_sec [delete: restrict, update: cascade]
Ref: carga_academica.unc_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: carga_academica.pro_id > profesor.id_pro [delete: restrict, update: cascade]
Ref: horario.caa_id > carga_academica.id_caa [delete: cascade, update: cascade]
Ref: horario.aul_id > aula.id_aul [delete: cascade, update: cascade]

// Inscripción
Ref: inscripcion.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: inscripcion.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: inscripcion.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: inscripcion.tpi_id > tipo_inscripcion.id_tpi [delete: restrict, update: cascade]
Ref: inscripcion_detalle.ins_id > inscripcion.id_ins [delete: cascade, update: cascade]
Ref: inscripcion_detalle.caa_id > carga_academica.id_caa [delete: cascade, update: cascade]
Ref: inscripcion_detalle.acc_id > acta_calificacion.id_acc [delete: cascade, update: cascade]

// Evaluaciones
Ref: corte_lapso.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: plan_evaluacion.caa_id > carga_academica.id_caa [delete: restrict, update: cascade]
Ref: plan_evaluacion.col_id > corte_lapso.id_col [delete: restrict, update: cascade]
Ref: calificacion.ple_id > plan_evaluacion.id_ple [delete: cascade, update: cascade]
Ref: calificacion.ind_id > inscripcion_detalle.id_ind [delete: cascade, update: cascade]
Ref: calificacion.use_id > user.id_use [delete: cascade, update: cascade]
Ref: calificacion_corte.ind_id > inscripcion_detalle.id_ind [delete: cascade, update: cascade]
Ref: calificacion_corte.col_id > corte_lapso.id_col [delete: restrict, update: cascade]

// Actas
Ref: libro_acta.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: acta_calificacion.lia_id > libro_acta.id_lia [delete: cascade, update: cascade]
Ref: acta_calificacion.caa_id > carga_academica.id_caa [delete: cascade, update: cascade]
Ref: acta_calificacion.pir_id > programa_especial_recuperacion.id_pir [delete: cascade, update: cascade]
Ref: acta_calificacion.cerrada_por_use_id > user.id_use [delete: cascade, update: cascade]

// Trámites
Ref: expediente_estudiante.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: expediente_estudiante.dor_id > documento_requisito.id_dor [delete: restrict, update: cascade]
Ref: expediente_estudiante.verificado_por_use_id > user.id_use [delete: restrict, update: cascade]
Ref: tramite_academico.est_id > estudiante.id_est [delete: restrict, update: cascade]

// Egresos
Ref: titulo_obtenido.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: salida_intermedia.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: promocion_pnf.prm_id > promocion.id_prm [delete: restrict, update: cascade]
Ref: promocion_pnf.tio_id > titulo_obtenido.id_tio [delete: restrict, update: cascade]
Ref: promocion_estudiante.prp_id > promocion_pnf.id_prp [delete: restrict, update: cascade]
Ref: promocion_estudiante.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: solicitud_grado.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: solicitud_grado.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: solicitud_grado.prm_id > promocion.id_prm [delete: restrict, update: cascade]
Ref: solicitud_grado.tio_id > titulo_obtenido.id_tio [delete: restrict, update: cascade]
Ref: solicitud_grado.sed_id > sede.id_sed [delete: restrict, update: cascade]
Ref: solicitud_grado.mac_id > malla_curricular.id_mac [delete: restrict, update: cascade]
Ref: solicitud_grado.esg_id > estatus_solicitud_grado.id_esg [delete: restrict, update: cascade]
Ref: solicitud_grado.aprobada_por_use_id > user.id_use [delete: restrict, update: cascade]

// Seguimiento y Equivalencias
Ref: historial_estatus_estudiante.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: historial_estatus_estudiante.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: equivalencia_academica.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: equivalencia_academica.unc_id > unidad_curricular.id_unc [delete: restrict, update: cascade]

// Admisión
Ref: proceso_admision.per_id > persona.id_per [delete: restrict, update: cascade]
Ref: proceso_admision.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: proceso_admision.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]

// Asistencia
Ref: asistencia_clase.hor_id > horario.id_hor [delete: cascade, update: cascade]
Ref: asistencia_clase.ind_id > inscripcion_detalle.id_ind [delete: cascade, update: cascade]
Ref: asistencia_clase.registrado_por_use_id > user.id_use [delete: restrict, update: cascade]

// Bienestar
Ref: perfil_bienestar.est_id - estudiante.id_est [delete: restrict, update: cascade]

// Proyectos PNF
Ref: proyecto_investigacion.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: proyecto_investigacion.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: proyecto_investigacion.tutor_academico_pro_id > profesor.id_pro [delete: restrict, update: cascade]
Ref: integrante_proyecto.pri_id > proyecto_investigacion.id_pri [delete: cascade, update: cascade]
Ref: integrante_proyecto.est_id > estudiante.id_est [delete: cascade, update: cascade]
Ref: jurado_proyecto.pri_id > proyecto_investigacion.id_pri [delete: cascade, update: cascade]
Ref: jurado_proyecto.pro_id > profesor.id_pro [delete: cascade, update: cascade]

// Programa Especial de Recuperación (PER)
Ref: programa_especial_recuperacion.unc_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: programa_especial_recuperacion.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: programa_especial_recuperacion.pro_id > profesor.id_pro [delete: restrict, update: cascade]
Ref: programa_especial_recuperacion.acc_id > acta_calificacion.id_acc [delete: cascade, update: cascade]
Ref: inscripcion_per.pir_id > programa_especial_recuperacion.id_pir [delete: cascade, update: cascade]
Ref: inscripcion_per.est_id > estudiante.id_est [delete: cascade, update: cascade]

// Prelaciones y Bloqueos
Ref: regla_prelacion.unc_destino_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: regla_prelacion.unc_origen_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: bloqueo_administrativo.est_id > estudiante.id_est [delete: restrict, update: cascade]
Ref: bloqueo_administrativo.levantado_por_use_id > user.id_use [delete: restrict, update: cascade]

// Seguridad y API
Ref: qr_validated_generated.tra_id > tramite_academico.id_tra [delete: restrict, update: cascade]
Ref: qr_validated_generated.generado_por_use_id > user.id_use [delete: restrict, update: cascade]
Ref: qr_validated_generated_titulo.pre_id > promocion_estudiante.id_pre [delete: restrict, update: cascade]
Ref: qr_validated_generated_titulo.generado_por_use_id > user.id_use [delete: restrict, update: cascade]
Ref: evento.use_id > user.id_use [delete: restrict, update: cascade]
Ref: api_key.aps_id > api_system.id_aps [delete: restrict, update: cascade]
Ref: api_permission.aps_id > api_system.id_aps [delete: cascade, update: cascade]
Ref: api_permission.aat_id > api_allowed_table.id_aat [delete: cascade, update: cascade]
Ref: api_access_log.aps_id > api_system.id_aps [delete: cascade, update: cascade]

// Roles y Permisos Estándar (RBAC)
Ref: rol_permiso.rol_id > rol.id_rol [delete: cascade, update: cascade]
Ref: rol_permiso.pmi_id > permiso.id_pmi [delete: cascade, update: cascade]
Ref: usuario_rol.rol_id > rol.id_rol [delete: cascade, update: cascade]
Ref: usuario_rol.use_id > user.id_use [delete: cascade, update: cascade]

// Censos e Intensivos
Ref: censo_oferta.laa_id > lapso_academico.id_laa [delete: restrict, update: cascade]
Ref: censo_oferta.unc_id > unidad_curricular.id_unc [delete: restrict, update: cascade]
Ref: censo_oferta.pnf_id > pnf.id_pnf [delete: restrict, update: cascade]
Ref: censo_estudiante.ceo_id > censo_oferta.id_ceo [delete: restrict, update: cascade]
Ref: censo_estudiante.est_id > estudiante.id_est [delete: restrict, update: cascade]

// ==========================================
// GRUPOS DE TABLAS (Visualización DBDiagram)
// ==========================================

// ==========================================
// MÓDULO 17: INTEGRACIÓN DE TRÁMITES Y TABLAS HEREDADAS (ANTIGUO SOGAC)
// ==========================================

Table tipo_tramite {
  id_tit integer [primary key, increment, note: 'Identificador único del tipo de trámite']
  nombre_tit varchar(100) [not null, note: 'Nombre del trámite (Reingreso, Cambio de Sede, Cambio de PNF, etc.)']
  codigo_tit varchar(50) [unique, not null, note: 'Código interno predecible']
  descripcion_tit text [note: 'Descripción corta del trámite']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tramite_cambio_sede {
  id_tcs integer [primary key, increment, note: 'Detalle de cambio de sede']
  observacion_tcs text [note: 'Motivo del cambio de sede']

  tra_id integer [not null, note: 'Referencia al trámite académico principal']
  sed_origen_id integer [not null, note: 'Sede/Localidad de origen']
  sed_destino_id integer [not null, note: 'Sede/Localidad solicitada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tramite_cambio_pnf {
  id_tcp integer [primary key, increment, note: 'Detalle de cambio de PNF']
  observacion_tcp text [note: 'Motivo del cambio de programa']

  tra_id integer [not null, note: 'Referencia al trámite académico principal']
  pnf_origen_id integer [not null, note: 'PNF de origen']
  pnf_destino_id integer [not null, note: 'PNF destino solicitado']
  mac_origen_id integer [note: 'Malla curricular de origen']
  mac_destino_id integer [note: 'Malla curricular solicitada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tramite_cambio_turno {
  id_tct integer [primary key, increment, note: 'Detalle de cambio de turno']
  turno_origen_tct varchar(50) [not null, note: 'Turno de origen (Mañana, Tarde, Noche)']
  turno_destino_tct varchar(50) [not null, note: 'Turno solicitado']
  observacion_tct text [note: 'Motivo del cambio de turno']

  tra_id integer [not null, note: 'Referencia al trámite académico principal']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table tramite_reingreso {
  id_trr integer [primary key, increment, note: 'Detalle de reingreso estudiantil']
  observacion_trr text [note: 'Observaciones del reingreso']

  tra_id integer [not null, note: 'Referencia al trámite académico principal']
  sec_origen_id integer [note: 'Última sección cursada antes del retiro']
  sec_destino_id integer [note: 'Sección asignada al reingresar']
  laa_origen_id integer [note: 'Último lapso cursado']
  mac_id integer [not null, note: 'Malla curricular asignada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table historico_registro_anual {
  id_hra integer [primary key, increment, note: 'Snapshot histórico de récord académico para lectura rápida (Append-Only)']
  nota_hra decimal(5,2) [note: 'Nota cuantitativa acumulada o final']
  condicion_hra varchar(20) [note: 'Condición de la materia (Aprobado, Reprobado, Retirado)']
  condicion_repitencia_hra varchar(20) [note: 'Condición de repitencia']
  observacion_hra text [note: 'Notas u observaciones históricas']

  est_id integer [not null, note: 'Referencia al estudiante']
  sed_id integer [not null, note: 'Referencia a la sede']
  pnf_id integer [not null, note: 'Referencia al PNF']
  mac_id integer [not null, note: 'Referencia a la malla curricular']
  ana_id integer [note: 'Referencia al trayecto/año académico']
  laa_id integer [not null, note: 'Referencia al lapso académico']
  unc_id integer [not null, note: 'Referencia a la unidad curricular']
  esm_id integer [note: 'Escala de medición aplicada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table promocion_estadistica_pnf {
  id_pep integer [primary key, increment, note: 'Caché estadístico precalculado para promociones por PNF']
  cantidad_egresado_pep integer [default: 0, note: 'Conteo total de egresados (Caché estadístico)']
  mayor_indice_pep decimal(5,2) [note: 'Índice académico más alto']
  menor_indice_pep decimal(5,2) [note: 'Índice académico más bajo']
  fecha_calculo_pep timestamptz [default: \`now()\`, note: 'Marca de tiempo del último cálculo']

  prm_id integer [not null, note: 'Referencia a la promoción']
  pnf_id integer [not null, note: 'Referencia al PNF']
  tio_id integer [not null, note: 'Título académico otorgado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table experiencia_laboral_docente {
  id_eld integer [primary key, increment, note: 'Registro consolidado de empleos externos del docente (Público/Privado)']
  tipo_ente_eld varchar(20) [not null, note: 'Público o Privado']
  organizacion_eld varchar(255) [not null, note: 'Nombre del ente, institución o empresa']
  departamento_eld varchar(255) [note: 'Departamento o dependencia adscrita']
  cargo_eld varchar(255) [note: 'Cargo o función desempeñada']
  horas_semanales_eld integer [note: 'Dedicación semanal expresada en horas']
  sueldo_eld decimal(12,2) [note: 'Remuneración declarada']

  pro_id integer [not null, note: 'Referencia al docente/profesor']
  laa_id integer [note: 'Lapso en el cual aplica la declaración']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table bitacora_sistema {
  id_bis integer [primary key, increment, note: 'Bitácora central de auditoría transaccional del sistema']
  modulo_bis varchar(100) [note: 'Módulo o servicio del sistema']
  tipo_evento_bis varchar(50) [not null, note: 'Categoría de evento (INSERT, UPDATE, DELETE, AUTH)']
  tabla_afectada_bis varchar(100) [note: 'Nombre de la tabla modificada']
  datos_anteriores_bis jsonb [note: 'Snapshot en JSON previo al cambio']
  datos_nuevos_bis jsonb [note: 'Snapshot en JSON posterior al cambio']
  direccion_ip_bis varchar(45) [note: 'IP de la petición web']
  observacion_bis text [note: 'Detalles adicionales']

  use_id integer [note: 'Usuario responsable de la acción']
  registro_id_bis integer [note: 'Identificador del registro operado']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table rol_mensaje_configuracion {
  id_rmc integer [primary key, increment, note: 'Avisos y mensajes predeterminados según rol']
  mensaje_rmc text [not null, note: 'Contenido del mensaje configurado']

  rol_id integer [not null, note: 'Rol de usuario destinatario']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table censo_intensivo {
  id_cei integer [primary key, increment, note: 'Pre-inscripción o censo para intensivos']
  fecha_inscripcion_cei date [default: \`now()\`, note: 'Fecha de registro en el censo']

  est_id integer [not null, note: 'Referencia al estudiante']
  unc_id integer [not null, note: 'Unidad curricular a censar']
  mac_id integer [not null, note: 'Malla curricular correspondiente']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

Table convalidacion {
  id_con integer [primary key, increment, note: 'Equivalencias y convalidadas entre materias de mallas/PNF']
  pnf_origen_id integer [not null, note: 'PNF de origen']
  mac_origen_id integer [not null, note: 'Malla curricular de origen']
  unc_origen_id integer [not null, note: 'Unidad curricular cursada']
  pnf_destino_id integer [not null, note: 'PNF de destino']
  mac_destino_id integer [not null, note: 'Malla curricular de destino']
  unc_destino_id integer [not null, note: 'Unidad curricular convalidada']

  status_id integer [default: 1, note: 'Estado lógico del registro (Ref: status)']
  created_at timestamptz [default: \`now()\`, note: 'Fecha de creación del registro']
  updated_at timestamptz [note: 'Fecha de última actualización']
  deleted_at timestamptz [note: 'Fecha de borrado lógico (Soft Delete)']
  created_id integer [note: 'Usuario que creó el registro']
  updated_id integer [note: 'Usuario que actualizó por última vez']
}

TableGroup geografia {
  pais
  estado
  municipio
  parroquia
  localidad
}

TableGroup institucion {
  universidad
  sede
  sede_pnf
  cohorte
  cohorte_sede
}

TableGroup autoridades {
  tipo_autoridad
  cargo
  autoridad
}

TableGroup escalas {
  escala_medicion
  escala_nota
}

TableGroup demografia {
  etnia
  discapacidad
  rama_estudio_bachiller
  sistema_estudio_bachiller
  becado
}

TableGroup academico {
  departamento
  pnf
  unidad_curricular
  malla_curricular
}

TableGroup calendario {
  ano_academico
  lapso_academico
  evento_calendario
}

TableGroup recursos {
  persona
  user
  estudiante
  profesor
  aula
}

TableGroup clasificacion_docente {
  condicion_laboral
  categoria_docente
  dedicacion_docente
  profesion
}

TableGroup gestion {
  seccion
  carga_academica
  horario
  inscripcion
  inscripcion_detalle
}

TableGroup evaluacion {
  corte_lapso
  plan_evaluacion
  calificacion
}

TableGroup actas_legales {
  libro_acta
  acta_calificacion
}

TableGroup auditoria_y_egreso {
  documento_requisito
  expediente_estudiante
  tramite_academico
  historial_estatus_estudiante
  equivalencia_academica
}

TableGroup egresos_promociones {
  titulo_obtenido
  salida_intermedia
  promocion
  promocion_pnf
  promocion_estudiante
  solicitud_grado
}

TableGroup admision_bienestar {
  proceso_admision
  asistencia_clase
  perfil_bienestar
}

TableGroup proyectos_pnf {
  proyecto_investigacion
  integrante_proyecto
  jurado_proyecto
}

TableGroup evaluacion_per {
  programa_especial_recuperacion
  inscripcion_per
}

TableGroup normativa_academica {
  regla_prelacion
  bloqueo_administrativo
}

TableGroup seguridad_api {
  qr_validated_generated
  qr_validated_generated_titulo
  evento
  api_system
  api_allowed_table
  api_key
  api_permission
  api_access_log
}

TableGroup rbac_seguridad {
  rol
  permiso
  rol_permiso
  usuario_rol
}

TableGroup configuracion {
  configuracion_sistema
}

TableGroup censos {
  censo_oferta
  censo_estudiante
}

// Relaciones de Módulo 17 (Trámites e Integración Heredada)
Ref: tramite_cambio_sede.tra_id > tramite_academico.id_tra
Ref: tramite_cambio_sede.sed_origen_id > sede.id_sed
Ref: tramite_cambio_sede.sed_destino_id > sede.id_sed

Ref: tramite_cambio_pnf.tra_id > tramite_academico.id_tra
Ref: tramite_cambio_pnf.pnf_origen_id > pnf.id_pnf
Ref: tramite_cambio_pnf.pnf_destino_id > pnf.id_pnf
Ref: tramite_cambio_pnf.mac_origen_id > malla_curricular.id_mac
Ref: tramite_cambio_pnf.mac_destino_id > malla_curricular.id_mac

Ref: tramite_cambio_turno.tra_id > tramite_academico.id_tra

Ref: tramite_reingreso.tra_id > tramite_academico.id_tra
Ref: tramite_reingreso.sec_origen_id > seccion.id_sec
Ref: tramite_reingreso.sec_destino_id > seccion.id_sec
Ref: tramite_reingreso.laa_origen_id > lapso_academico.id_laa
Ref: tramite_reingreso.mac_id > malla_curricular.id_mac

Ref: historico_registro_anual.est_id > estudiante.id_est
Ref: historico_registro_anual.sed_id > sede.id_sed
Ref: historico_registro_anual.pnf_id > pnf.id_pnf
Ref: historico_registro_anual.mac_id > malla_curricular.id_mac
Ref: historico_registro_anual.ana_id > ano_academico.id_ana
Ref: historico_registro_anual.laa_id > lapso_academico.id_laa
Ref: historico_registro_anual.unc_id > unidad_curricular.id_unc
Ref: historico_registro_anual.esm_id > escala_medicion.id_esm

Ref: promocion_estadistica_pnf.prm_id > promocion.id_prm
Ref: promocion_estadistica_pnf.pnf_id > pnf.id_pnf
Ref: promocion_estadistica_pnf.tio_id > titulo_obtenido.id_tio

Ref: experiencia_laboral_docente.pro_id > profesor.id_pro
Ref: experiencia_laboral_docente.laa_id > lapso_academico.id_laa

Ref: bitacora_sistema.use_id > user.id_use

Ref: rol_mensaje_configuracion.rol_id > rol.id_rol

Ref: censo_intensivo.est_id > estudiante.id_est
Ref: censo_intensivo.unc_id > unidad_curricular.id_unc
Ref: censo_intensivo.mac_id > malla_curricular.id_mac

Ref: convalidacion.pnf_origen_id > pnf.id_pnf
Ref: convalidacion.mac_origen_id > malla_curricular.id_mac
Ref: convalidacion.unc_origen_id > unidad_curricular.id_unc
Ref: convalidacion.pnf_destino_id > pnf.id_pnf
Ref: convalidacion.mac_destino_id > malla_curricular.id_mac
Ref: convalidacion.unc_destino_id > unidad_curricular.id_unc

// Relaciones de Status
Ref: pais.status_id > status.id_sta
Ref: estado.status_id > status.id_sta
Ref: municipio.status_id > status.id_sta
Ref: parroquia.status_id > status.id_sta
Ref: localidad.status_id > status.id_sta
Ref: universidad.status_id > status.id_sta
Ref: sede.status_id > status.id_sta
Ref: sede_pnf.status_id > status.id_sta
Ref: cohorte.status_id > status.id_sta
Ref: cohorte_sede.status_id > status.id_sta
Ref: tipo_autoridad.status_id > status.id_sta
Ref: cargo.status_id > status.id_sta
Ref: autoridad.status_id > status.id_sta
Ref: escala_medicion.status_id > status.id_sta
Ref: escala_nota.status_id > status.id_sta
Ref: etnia.status_id > status.id_sta
Ref: discapacidad.status_id > status.id_sta
Ref: rama_estudio_bachiller.status_id > status.id_sta
Ref: sistema_estudio_bachiller.status_id > status.id_sta
Ref: becado.status_id > status.id_sta
Ref: departamento.status_id > status.id_sta
Ref: pnf.status_id > status.id_sta
Ref: unidad_curricular.status_id > status.id_sta
Ref: malla_curricular.status_id > status.id_sta
Ref: ano_academico.status_id > status.id_sta
Ref: lapso_academico.status_id > status.id_sta
Ref: evento_calendario.status_id > status.id_sta
Ref: persona.status_id > status.id_sta
Ref: user.status_id > status.id_sta
Ref: estudiante.status_id > status.id_sta
Ref: profesor.status_id > status.id_sta
Ref: aula.status_id > status.id_sta
Ref: seccion.status_id > status.id_sta
Ref: carga_academica.status_id > status.id_sta
Ref: horario.status_id > status.id_sta
Ref: inscripcion.status_id > status.id_sta
Ref: inscripcion_detalle.status_id > status.id_sta
Ref: corte_lapso.status_id > status.id_sta
Ref: plan_evaluacion.status_id > status.id_sta
Ref: calificacion.status_id > status.id_sta
Ref: libro_acta.status_id > status.id_sta
Ref: acta_calificacion.status_id > status.id_sta
Ref: documento_requisito.status_id > status.id_sta
Ref: expediente_estudiante.status_id > status.id_sta
Ref: tramite_academico.status_id > status.id_sta
Ref: titulo_obtenido.status_id > status.id_sta
Ref: salida_intermedia.status_id > status.id_sta
Ref: promocion.status_id > status.id_sta
Ref: promocion_pnf.status_id > status.id_sta
Ref: promocion_estudiante.status_id > status.id_sta
Ref: solicitud_grado.status_id > status.id_sta
Ref: historial_estatus_estudiante.status_id > status.id_sta
Ref: equivalencia_academica.status_id > status.id_sta
Ref: proceso_admision.status_id > status.id_sta
Ref: asistencia_clase.status_id > status.id_sta
Ref: perfil_bienestar.status_id > status.id_sta
Ref: proyecto_investigacion.status_id > status.id_sta
Ref: integrante_proyecto.status_id > status.id_sta
Ref: jurado_proyecto.status_id > status.id_sta
Ref: programa_especial_recuperacion.status_id > status.id_sta
Ref: inscripcion_per.status_id > status.id_sta
Ref: regla_prelacion.status_id > status.id_sta
Ref: bloqueo_administrativo.status_id > status.id_sta
Ref: qr_validated_generated.status_id > status.id_sta
Ref: qr_validated_generated_titulo.status_id > status.id_sta
Ref: evento.status_id > status.id_sta
Ref: api_system.status_id > status.id_sta
Ref: api_allowed_table.status_id > status.id_sta
Ref: api_key.status_id > status.id_sta
Ref: api_permission.status_id > status.id_sta
Ref: api_access_log.status_id > status.id_sta
Ref: rol.status_id > status.id_sta
Ref: permiso.status_id > status.id_sta
Ref: rol_permiso.status_id > status.id_sta
Ref: usuario_rol.status_id > status.id_sta
Ref: configuracion_sistema.status_id > status.id_sta
Ref: condicion_laboral.status_id > status.id_sta
Ref: categoria_docente.status_id > status.id_sta
Ref: dedicacion_docente.status_id > status.id_sta
Ref: profesion.status_id > status.id_sta
Ref: censo_oferta.status_id > status.id_sta
Ref: censo_estudiante.status_id > status.id_sta
Ref: tipo_tramite.status_id > status.id_sta
Ref: tramite_cambio_sede.status_id > status.id_sta
Ref: tramite_cambio_pnf.status_id > status.id_sta
Ref: tramite_cambio_turno.status_id > status.id_sta
Ref: tramite_reingreso.status_id > status.id_sta
Ref: historico_registro_anual.status_id > status.id_sta
Ref: promocion_estadistica_pnf.status_id > status.id_sta
Ref: experiencia_laboral_docente.status_id > status.id_sta
Ref: bitacora_sistema.status_id > status.id_sta
Ref: rol_mensaje_configuracion.status_id > status.id_sta
Ref: censo_intensivo.status_id > status.id_sta
Ref: convalidacion.status_id > status.id_sta
Ref: dependencia_institucion.status_id > status.id_sta
Ref: tipo_condicion.status_id > status.id_sta
Ref: condicion.status_id > status.id_sta
Ref: tipo_telefono.status_id > status.id_sta
Ref: telefono_persona.status_id > status.id_sta
Ref: tipo_periodo.status_id > status.id_sta
Ref: trayecto.status_id > status.id_sta
Ref: eje_curricular.status_id > status.id_sta
Ref: malla_curricular_detalle.status_id > status.id_sta
Ref: tipo_inscripcion.status_id > status.id_sta
Ref: calificacion_corte.status_id > status.id_sta
Ref: estatus_solicitud_grado.status_id > status.id_sta

Ref: condicion.tco_id > tipo_condicion.id_tco
Ref: universidad.dpi_id > dependencia_institucion.id_dpi
Ref: universidad.cdn_id > condicion.id_cdn
Ref: universidad.loc_id > localidad.id_loc
Ref: sede.cdn_id > condicion.id_cdn

Ref: telefono_persona.per_id > persona.id_per
Ref: telefono_persona.tte_id > tipo_telefono.id_tte

Ref: estudiante.bachillerato_loc_id > localidad.id_loc
Ref: estudiante.cos_ingreso_id > cohorte_sede.id_cos
Ref: estudiante.laa_ingreso_id > lapso_academico.id_laa
Ref: estudiante.laa_egreso_id > lapso_academico.id_laa
Ref: unidad_curricular.tuc_id > tipo_unidad_curricular.id_tuc
Ref: tramite_academico.car_id > causa_retiro.id_car
Ref: noticia.use_id > user.id_use
Ref: causa_retiro.status_id > status.id_sta
Ref: noticia.status_id > status.id_sta
Ref: perfil_bienestar.cor_id > condicion_residencia.id_cor
Ref: condicion_residencia.status_id > status.id_sta
Ref: aula.tia_id > tipo_aula.id_tia
Ref: tipo_aula.status_id > status.id_sta
Ref: notificacion_correo.use_id > user.id_use
Ref: notificacion_correo.status_id > status.id_sta
\n`;