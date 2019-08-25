import './style/main.css'
import './style/tooltip.css'
import Map from './map.js'

import './style/progress-bar.css'
import ProgressBar from './progress-bar.js'

import Hash from './url-hash.js'

import './style/bookmark.css'
import './style/overlay.css'
import Subscribe from './subscribe.js'

Map.initScrollController()
Map.initTooltip()

ProgressBar.initScrollController()
ProgressBar.initClickNav()

Hash.initHashController()

Subscribe.initBookmark()