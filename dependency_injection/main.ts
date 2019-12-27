import 'reflect-metadata';

import { container } from 'tsyringe';
import { ClassWithParameterlessConstructor } from './Foo';
import { NuggetFilterer } from './NuggetFilterer';

const instance = container.resolve(ClassWithParameterlessConstructor);
instance.sayName();

const nuggetFilterer = container.resolve(NuggetFilterer);

console.log(nuggetFilterer.getFilteredNuggets());
