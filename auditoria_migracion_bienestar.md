# 📊 Auditoría y Plan de Migración: Módulo Bienestar Estudiantil

Este documento contiene el resultado de la auditoría comparativa entre la base de datos previa `bienestar-estudiantil.txt` y el modelo consolidado actual `Nuevo-SOGAC.js`. Se conserva como referencia para cuando se decida ejecutar la migración del módulo de Bienestar Estudiantil.

---

## 1️⃣ Tablas Excluidas (No requieren migración)
Estas tablas no serán migradas al nuevo modelo ya sea porque pertenecen a la estructura interna del framework anterior (Laravel) o porque **ya existe** una tabla equivalente en `Nuevo-SOGAC.js`.

### 🔧 Internas del Framework (Laravel)
| Tabla Original | Motivo de Exclusión |
|---|---|
| `migrations`, `cache`, `cache_locks`, `jobs`, `job_batches`, `failed_jobs`, `sessions`, `password_reset_tokens`, `personal_access_tokens` | Tablas de gestión interna de Laravel (Colas, Caché, Sesiones, Tokens). No pertenecen al modelo de dominio. |

### 🔄 Equivalentes en SOGAC
| Tabla en Bienestar | Equivalente en `Nuevo-SOGAC.js` | Descripción / Justificación |
|---|---|---|
| `usuario` | `user` | Gestión centralizada de usuarios del sistema. |
| `persona` | `persona` | Catálogo central de datos personales. |
| `persona_pnf` | `estudiante` / `inscripcion` | La relación entre persona y PNF ya se gestiona nativamente. |
| `rol` | `rol` | Gestión de roles de sistema. |
| `permiso` | `permiso` | Gestión de permisos de sistema. |
| `rol_permiso` | `rol_permiso` | Relación de roles y permisos. |
| `rol_usuario` | `usuario_rol` | Asignación de roles a usuarios. |
| `configuracion_sistema` | `configuracion_sistema` | Tabla global de configuraciones. |
| `estados` | `estado` | Catálogo geográfico. |
| `municipios` | `municipio` | Catálogo geográfico. |
| `localidads` | `localidad` | Catálogo geográfico. |
| `sede` | `sede` | Estructura de sedes universitarias. |
| `pnf` | `pnf` | Catálogo de Programas Nacionales de Formación. |
| `departamentos` | `departamento` | Estructura organizativa. |
| `estatus` | `status` | Gestión de estados generales (activo, inactivo). |
| `bitacora` | `bitacora_sistema` / `api_access_log` | Auditoría de acciones de usuarios en el sistema. |
| `perfil` | `perfil_bienestar` | Clasificación y perfiles de usuarios. |
| `direccion` | Integrado en `persona` | Las direcciones se gestionan en la tabla persona o tablas asociadas. |
| `archivos` | `documento_requisito` | La gestión de expedientes y archivos ya tiene su propia estructura. |

---

## 2️⃣ Tablas a Migrar (Plan de Acción por Módulo)
Estas son las tablas identificadas que **NO existen** en el modelo actual de SOGAC y representan la lógica de negocio pura de las distintas áreas de Bienestar Estudiantil. Al momento de la migración deberán ser normalizadas bajo las convenciones (Nomenclatura, Códigos de 3 letras, Auditoría, Orden canónico).

### 📦 Inventario Centralizado (Transversal)
Este módulo soporta logística para Comedor, Salud, y Deportes.
- `unidades`, `categorias`, `envase_primario`, `tipo_producto`
- `proveedors`, `productos`, `precio_productos`, `lotes`
- `inventario_sede_lotes`, `inventario_total`, `movimiento_inventarios`
- `compras`, `detalle_compras`

### 🍽️ Módulo: Comedor
- `recetas`, `receta_ingredientes`
- `consumo_diarios`, `consumo_diario_detalles`
- `detalle_registro_diarios`, `registro_diario_c`
- `sobrantes_comedor`

### ⚕️ Módulo: Salud
- `consultorios`, `horario_consultorios`
- `enfermedades`, `consulta`
- `recetas_medicas`, `detalle_recetas_medicas`
- `dispensacion`

### 🧠 Módulo: Psicología
- `estado_animos`, `avances_sesion`, `estado_animo_diarios`
- `grupos_horarios`, `prioridades`
- `historia_plantillas_globales`, `historia_plantillas_secciones`, `nota_evolucion_campos`
- `historia_clinicas`, `historia_secciones_personalizadas`, `historia_segmentos_personalizados`, `historia_enfermedad`
- `citas`, `cita_nota_evolucion`
- *(Red social / comunicaciones: `publicaciones`, `conversations`, `messages`, `publicacion_reacciones` - a ser evaluadas).*

### ⚽ Módulo: Deportes
- `deporte_espacio`, `deporte_actividad`, `deporte_calendario`, `deporte_horario`
- `deporte_inscripcion`, `deporte_prestamo`, `deporte_sancion`
- `deporte_torneo`, `deporte_torneo_equipo`, `deporte_torneo_integrante`

### 🚌 Módulo: Transporte
- `marcas`, `modelos`, `tipo_combustibles`
- `vehiculos`, `carga_combustibles`, `mantenimientos`
- `bus_rutas`, `bus_paradas`, `bus_ruta_paradas`, `ruta_horarios`
- `bus_viajes`, `viaje_pasajeros`, `bus_gps_logs`

### 🎓 Módulo: Becas
- `tipo_beneficio`, `be_beneficios`, `be_beneficio_criterios`
- `be_lapsos` *(vincular a `lapso_academico`)*
- `condicion_estudiante` *(vincular a `condicion`)*
- `be_beca_preguntas`, `be_beca_pregunta_opciones`
- `jornada_beca`, `be_jornada_criterios`
- `be_solicitud_becas`, `beca_asignada`, `solicitud_documento`

---

## 3️⃣ Fases de Ejecución Futuras (Propuesta)

1. **Fase 1: Preparación Transversal** (Módulo de Inventario Unificado).
2. **Fase 2: Módulos Operativos** (Transporte, Deportes, Comedor).
3. **Fase 3: Servicios de Atención Medica y Psicológica** (Salud y Psicología).
4. **Fase 4: Beneficios Estudiantiles** (Becas y Ayudas).
