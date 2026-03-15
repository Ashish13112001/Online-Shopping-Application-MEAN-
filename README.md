# Online Shopping Application


src/
 └─ app/
     ├─ core/                  # Singleton services, interceptors, guards, constants
     │   ├─ services/
     │   │   ├─ auth.service.ts
     │   │   ├─ product.service.ts
     │   │   ├─ cart.service.ts
     │   │   └─ order.service.ts
     │   ├─ guards/
     │   │   └─ auth.guard.ts
     │   ├─ interceptors/
     │   │   └─ token.interceptor.ts
     │   ├─ models/           # Common interfaces / types
     │   │   └─ user.model.ts
     │   └─ constants/        # App-wide constants
     │       └─ api.constants.ts
     │
     ├─ features/              # Feature-based modules or standalone components
     │   ├─ auth/              # Authentication
     │   │   ├─ signin/
     │   │   ├─ signup/
     │   │   └─ auth-routing.module.ts
     │   │
     │   ├─ products/          # Product listing & details
     │   │   ├─ product-list/
     │   │   ├─ product-detail/
     │   │   └─ products-routing.module.ts
     │   │
     │   ├─ cart/              # Shopping cart
     │   │   ├─ cart.component.ts
     │   │   └─ cart.module.ts
     │   │
     │   ├─ checkout/          # Checkout process
     │   │   ├─ checkout.component.ts
     │   │   ├─ payment.component.ts
     │   │   └─ checkout.module.ts
     │   │
     │   ├─ orders/            # Order history & details
     │   │   └─ orders.component.ts
     │   │
     │   └─ dashboard/         # Admin or user dashboard
     │       └─ dashboard.component.ts
     │
     ├─ shared/                # Reusable components, directives, pipes
     │   ├─ components/
     │   │   ├─ button/
     │   │   ├─ modal/
     │   │   └─ navbar/
     │   ├─ directives/
     │   └─ pipes/
     │
     ├─ layouts/               # App layout components
     │   ├─ main-layout/
     │   └─ auth-layout/
     │
     ├─ environments/          # Environment-specific configurations
     │   ├─ environment.ts
     │   ├─ environment.prod.ts
     │   └─ environment.staging.ts
     │
     ├─ app.component.ts
     ├─ app.component.html
     ├─ app.component.css
     └─ app-routing.module.ts