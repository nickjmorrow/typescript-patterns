import 'reflect-metadata';

import { container } from 'tsyringe';
import { ClassWithParameterlessConstructor } from './Foo';

const instance = container.resolve(ClassWithParameterlessConstructor);
instance.sayName();
