import { ThemeIcons } from './configs/iconsConfig'

import * as allIcons from './icons'

interface Theme {
  Icons: ThemeIcons
}

const theme: Theme = {
  Icons: allIcons,
}

const { Icons } = theme

export { Icons }
