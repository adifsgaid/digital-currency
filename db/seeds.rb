# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Currency.create([
                  {
                    name: 'Bitcoin',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/bch.svg'
                  },
                  {
                    name: '$PAC',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/$pac.svg'
                  },
                  {
                    name: '0XBTC',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/0xbtc.svg'
                  },
                  {
                    name: 'AION',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/aion.svg'
                  },
                  {
                    name: 'ARN',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/arn.svg'
                  },
                  {
                    name: 'CNY',
                    image_url: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/black/cny.svg'
                  }
                ])
