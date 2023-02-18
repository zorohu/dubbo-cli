import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'

enum ConnectionType {
  HOST = 'host connection',
  REG = 'register service',
}

export default class Select extends Command {
  static flags = {
    stage: Flags.string({options: [`${ConnectionType}`]}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Select)
    let stage = flags.stage
    if (!stage) {
      const responses: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a connection type',
        type: 'list',
        choices: [{name: ConnectionType.HOST}, {name: ConnectionType.REG}],
      }])
      stage = responses.stage
    }

    switch (stage) {
    case ConnectionType.HOST:
      this.log(`the stage is: ${stage}`)
      break
    case ConnectionType.REG:
      this.log(`the stage is: ${stage}`)
      break
    default:
      break
    }
  }
}
