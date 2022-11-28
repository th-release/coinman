import Command from '../interfaces/Command'
import { I, D } from '../aliases/discord.js.js'
import CoinGecko from 'coingecko-api'

const coinClient = new CoinGecko();
export default class coinCommand implements Command {

  async run (interaction: I) {
    const coin = interaction.options.getString("coin")!.toString()
    const money = interaction.options.getString("money")!.toString()
    const price = await coinClient.simple.price({
      ids: [coin],
      vs_currencies: [money]
    })
    if(price.success) {
      if (coin === "bitcoin" && money === "krw") return interaction.editReply("```cs\n 비트코인 시세: \"" + price.data.bitcoin.krw + "\" KRW```")
      else if (coin === "bitcoin" && money === "usd") return interaction.editReply("```cs\n 비트코인 시세: \"" + price.data.bitcoin.usd + "\" USD```")
      else if (coin === "litecoin" && money === "krw") return interaction.editReply("```cs\n 라이트코인 시세: \"" + price.data.litecoin.krw + "\" KRW```")
      else if (coin === "litecoin" && money === "usd") return interaction.editReply("```cs\n 라이트코인 시세: \"" + price.data.litecoin.usd + "\" USD ```")
      else if (coin === "ethereum" && money === "krw") return interaction.editReply("```cs\n 이더리움 시세: \"" + price.data.ethereum.krw + "\" KRW```")
      else if (coin === "ethereum" && money === "usd") return interaction.editReply("```cs\n 이더리움 시세: \"" + price.data.ethereum.usd + "\" USD```")
      else if (coin === "dogecoin" && money === "krw") return interaction.editReply("```cs\n 도지코인 시세: \"" + price.data.dogecoin.krw + "\" KRW```")
      else if (coin === "dogecoin" && money === "usd") return interaction.editReply("```cs\n 도지코인 시세: \"" + price.data.dogecoin.usd + "\" USD```")
      else if (coin === "ripple" && money === "krw") return interaction.editReply("```cs\n 리플 시세: \"" + price.data.ripple.krw + "\" KRW```")
      else if (coin === "ripple" && money === "usd") return interaction.editReply("```cs\n 리플 시세: \"" + price.data.ripple.usd + "\" USD```")
      else {
        return interaction.editReply("```잘못된 요청 입니다.```")
      }
    } else {
      return interaction.editReply(price.message)
    }
  }

  metadata = <D>{
    name: '코인',
    description: 'show you coin!',
    options: [
      { 
        name: "coin", 
        description: "coin name", 
        choices: [
          { name: "BTC", value: "bitcoin" },
          { name: "LTC", value: "litecoin" },
          { name: "ETH", value: "ethereum" },
          { name: "DOGE", value: "dogecoin" },
          { name: "XRP", value: "ripple" }
        ],
        type: "STRING"
      },
      {
        name: "money",
        description: "country",
        choices: [
          { name: "KRW", value: "krw" },
          { name: "USD", value: "usd" }
        ],
        type: "STRING"
      }
    ]
  }
}
