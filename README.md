src/
├── app/
│   ├── core/      # Servicios Singleton, Auth, Interceptors
│   ├── features/  # Lógica de Negocio (Inventory, Sales, CRM)
│   ├── layouts/   # Estructuras (Sidebar, Header, Auth)
│   └── shared/    # Componentes UI reutilizables y Modelos


CORE: Contiene los servicios, interceptores y configuraciones que son Singletons (únicos en toda la aplicación).
-> Aquí va todo lo que necesita la aplicación para "vivir" pero que no pertenece a una sola página.

FEATURES: La funcionalidad específica de la aplicación dividida en dominios.
-> Cada subcarpeta es una funcionalidad independiente. Si mañana quieres quitar el módulo de "Fiados", solo borras 
   esta carpeta y el resto del sistema no debería verse afectado.

LAYOUTS: Define la estructura visual de las páginas.
-> Permite separar componentes que son solo "envoltorios" (como el menú lateral y el header) del contenido principal.

SHARED: Componentes, directivas y utilidades de "bajo nivel" reutilizables.
->Todo lo que esté aquí no debe tener conocimiento de la lógica de negocio; son componentes que solo reciben datos y disparan eventos.