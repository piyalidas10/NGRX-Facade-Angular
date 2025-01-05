# Angular 18 NGRX with Facade Pattern

https://stackblitz.com/github.com/piyalidas10/NGRX-Facade-Angular

![NGRX with Facade Pattern](https://github.com/piyalidas10/NGRX-Facade-Angular/blob/9f8874b7737521b66526d1f70b168885ff471163/ngrx-facade.png)

The Facade pattern wants to simplify this approach by wrapping the NgRx interactions in one place, allowing the Component to only ever interact with the Facade.

### Why need Facade Pattern ?
While NgRx is a powerful tool for managing state, it can also introduce significant complexity to your codebase. The verbosity of defining and managing Actions, Reducers, and Selectors often leads to repetitive patterns that can overwhelm developers. In large-scale projects, this complexity can make the architecture harder to understand and maintain over time.

This is where the Facade Pattern proves to be a valuable solution, simplifying state management by reducing boilerplate code and offering a cleaner way to interact with the state.

### What is Facade Pattern ?
The Facade Pattern is a a structural design pattern that introduces a layer of abstraction between your components and the state management logic. Instead of interacting directly with the Store, components rely on a Facade service that encapsulates all state-related operations.

### Facades in Angular
In Angular, implementing the Facade Pattern involves creating a service (the facade) that interacts with various other services or state management logic. This facade service acts as the single point of contact for components, providing a clean and simple API that abstracts away the complexities of the underlying system.

In the following example, the CommonFacade service abstracts the complexities of interacting with the NgRx store. It provides methods like loadAll, getGroceries, getBuckets, filterByGroceryType, addToBucket, removeFromBucket which hides the details of dispatching actions and managing state.

Components that need to add groceries to the bucket can do so without any knowledge of the underlying store or the need to dispatch actions directly.

This separation of concerns ensures that components are not only simpler and more focused on their primary roles but also more maintainable and less prone to errors associated with direct state management operations. By using the facade, the details of state management are hidden, allowing component developers to work with a cleaner and more straightforward API that does not expose the complexities of the underlying NgRx architecture. This approach significantly enhances the scalability and maintainability of the application, adhering to the principles of good software architecture by isolating the business logic from the UI components.

### Other examples of Facade Patter use with Angular
https://blog.bitsrc.io/angular-facade-design-pattern-and-how-it-can-improve-performance-65bc2aabdb26