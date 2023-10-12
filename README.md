
# Proyecto del Primer Parcial: Aplicación Web TODO List

Este proyecto del primer parcial tiene como objetivo implementar una arquitectura para una aplicación web de TODO List. La arquitectura consta de diversas instancias de EC2 y una instancia de S3, todas las cuales deben ser configuradas correctamente para garantizar el funcionamiento adecuado de la aplicación. A continuación se detallan los puntos clave que deben cumplirse:

![enter image description here](https://raw.githubusercontent.com/Juan-Angel-Cepeda/cloud-proyect/master/Images/Proyecto%20primer%20pacial%20cloud.png)

## Descripción de la Arquitectura:

1.  **Instancias EC2:**
    
    -   Se han creado varias instancias EC2 para alojar diferentes componentes de la aplicación.
    -   Dos de estas instancias EC2 utilizan Docker para ejecutar la aplicación. 
2.  **Instancia S3:**
    
    -   Se ha configurado una instancia de Amazon S3 para el almacenamiento y la gestión de archivos estáticos de la aplicación.
3.  **Acceso mediante Servidor Bastion:**
    
    -   Todas las instancias EC2 deben ser accesibles únicamente a través de un servidor bastion.
    
4.  **Configuración de Docker:**
    
    -   Las dos instancias EC2 que usan Docker deben tener un archivo `docker-compose.yml` configurado adecuadamente.
    -   El archivo `docker-compose.yml` debe ejecutar un servidor Nginx y dos instancias de la aplicación web dockerizadas.

## Instrucciones para Configuración:

Para configurar y desplegar esta arquitectura, sigue estos pasos:

1.  **Configuración de las Instancias EC2:**
    
    -   Crear y configurar las instancias EC2 necesarias para la aplicación. 
2.  **Configuración del Servidor Bastion:**
    
    -   Configurar un servidor bastion para gestionar el acceso a las instancias EC2. Implementar medidas de seguridad como claves SSH para restringir el acceso.
3.  **Configuración de Docker y docker-compose:**
    
    -   En las instancias EC2 que utilizarán Docker, se creo un archivo `docker-compose.yml` con la configuración necesaria para ejecutar Nginx y dos instancias de la aplicación web dockerizadas.
4.  **Configuración de la Instancia S3:**
    
    -   Se configuró la instancia de Amazon S3 para el almacenamiento de archivos estáticos. 
5.  **Implementación de Medidas de Seguridad:**
    
    -   Implementamos medidas de seguridad en todas las instancias EC2 y en la instancia S3 para garantizar un entorno seguro. Esto puede incluir la configuración de grupos de seguridad, la encriptación de datos y la gestión adecuada de las credenciales de acceso.
6.  **Pruebas y Monitoreo:**
    
    -   Se realizaron pruebas para asegurar de que la aplicación funcione correctamente en el entorno implementado.
   

## Puntos a Clave:

-   Correcta configuración de las instancias EC2 y la instancia S3.
-   Implementación adecuada del servidor bastion y restricciones de acceso.
-   Configuración correcta de Docker y el archivo `docker-compose.yml`.
-   Implementación de medidas de seguridad eficaces en todas las instancias y la instancia S3.
-   Funcionamiento adecuado de la aplicación web TODO List en el entorno implementado.