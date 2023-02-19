import {Dubbo} from 'apache-dubbo-consumer'
// eslint-disable-next-line node/no-extraneous-import
import * as registry from 'apache-dubbo-registry'

// eslint-disable-next-line new-cap
const nacosRegistry = registry.Nacos({connect: '', logger: console})

Dubbo.from({registry: nacosRegistry, services: '', application: {name: 'aaa'}})
