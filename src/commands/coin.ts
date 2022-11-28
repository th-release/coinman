import Command from '../interfaces/Command'
import { I, D } from '../aliases/discord.js'
import axios from 'axios'

export default class coinCommand implements Command {

  async run (interaction: I) {
    
  }

  metadata = <D>{
    name: 'coin',
    description: 'can you see right now',
    options: [{
      name: "coin"
    }]
  }
}
