import type { Locale } from './i18n';

export interface FeatureItem { title: string; body: string }
export interface StepItem { title: string; body: string }
export interface FaqItem { q: string; a: string }
export interface SectionItem { h2: string; body: string }

export interface ToolDict {
  subtitle: string;
  sections: SectionItem[];
  faq: FaqItem[];
}

export interface Dict {
  marquee: string;
  tagline: string;
  toolHeroTagline: string;
  ui: {
    allTools: string;
    whyUseThis: string;
    howItWorks: string;
    faq: string;
    otherTools: string;
    useFree: string;
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
    disclaimer: string;
  };
  home: {
    features: FeatureItem[];
    steps: StepItem[];
    faq: FaqItem[];
  };
}

// English — canonical / fallback for everything
const en: Dict = {
  marquee: '★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ',
  tagline: 'STORIES · REELS · PHOTOS · HIGHLIGHTS · DP · AUDIO — ONE PASTE, NO LOGIN',
  toolHeroTagline: 'FREE · NO LOGIN · NO WATERMARK',
  ui: {
    allTools: '— ALL TOOLS',
    whyUseThis: '— WHY USE THIS',
    howItWorks: '— HOW IT WORKS',
    faq: '— FAQ',
    otherTools: '— OTHER TOOLS',
    useFree: 'USE FREE →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'TERMS',
    contact: 'CONTACT',
    disclaimer: 'Not affiliated with Meta or Instagram.',
  },
  home: {
    features: [
      { title: 'No login, no app', body: 'Paste a public URL or username, hit save. Nothing to install, no Instagram credentials handed over, no follower graph polluted by your account checking competitors.' },
      { title: 'Original quality, no watermark', body: 'Files come from Instagram\'s CDN as they were uploaded. MP4 video at source resolution, JPG photos at the public 1080px cap, MP3 audio at source bitrate. No re-encoding, no watermark glued on.' },
      { title: 'Every post type covered', body: 'Reels, Stories, Highlights, photo carousels, profile pictures, IGTV, live replays, audio rips. One tool, eight focused pages, the same anonymous fetch behind each.' },
    ],
    steps: [
      { title: 'Paste the URL', body: 'Open the post or profile on Instagram, copy the link or the @username. Paste it into the field on whichever tool page matches what you want — Reels, Stories, Photos, Highlights, DP, Video, or Audio.' },
      { title: 'Pick what to save', body: 'The page lists every available file in upload order. For carousels, each frame shows separately with the position. For Reels, you choose between full MP4 and audio-only MP3.' },
      { title: 'Save to device', body: 'Hit save. The file lands in your default download location — Files on iOS, Downloads on Android, the regular browser folder on desktop. No account record, no follow-up.' },
    ],
    faq: [
      { q: 'Do I need an Instagram account?', a: "No. The username is enough. The fetch runs through this site's servers, not your Instagram session, so no login is exchanged and no follow request goes out." },
      { q: 'Is the insta stories viewer anonymous?', a: "Yes, for public accounts. The owner's viewer list never gets your username because the request doesn't carry one. Private accounts are off-limits to any third-party tool — including this one — by design." },
      { q: 'What about download limits or watermarks?', a: "No daily cap, no premium tier, no watermark stamped on what you save. The MP4 or JPG is the original CDN file, exactly as Instagram serves it. We don't re-encode, we don't compress, we don't add anything." },
      { q: 'Why are there separate pages for Reels, Stories, Photos, Highlights?', a: "Each format has its own quirks — Reels max out at 90 seconds and have audio-only export, Stories live for 24 hours, Highlights are the pinned ones that survive past expiry, photos can be carousels of up to ten images. Splitting the pages keeps the right options visible for each. Same backend behind all of them." },
    ],
  },
};

// Korean
const ko: Dict = {
  ...en,
  marquee: '★ 무료  ★ 로그인 없음  ★ 고화질  ★ 워터마크 없음  ★ 빠름  ★ 무료  ★ 로그인 없음  ★ 고화질  ★ 워터마크 없음  ★ 빠름  ',
  tagline: '스토리 · 릴스 · 사진 · 하이라이트 · 프로필 · 오디오 — 한 번 붙여넣기, 로그인 없음',
  toolHeroTagline: '무료 · 로그인 없음 · 워터마크 없음',
  ui: {
    allTools: '— 모든 도구',
    whyUseThis: '— 사용 이유',
    howItWorks: '— 작동 방식',
    faq: '— 자주 묻는 질문',
    otherTools: '— 다른 도구',
    useFree: '무료 사용 →',
  },
  footer: {
    privacy: '개인정보',
    terms: '약관',
    contact: '문의',
    disclaimer: 'Meta 또는 Instagram과 제휴하지 않습니다.',
  },
  home: {
    features: [
      { title: '로그인도, 앱도 없음', body: '공개 URL이나 사용자명을 붙여 넣고 저장만 누르면 됩니다. 설치할 앱도, 넘겨줄 인스타그램 자격증명도, 경쟁사 모니터링하느라 더럽혀질 팔로우 그래프도 없습니다.' },
      { title: '원본 화질, 워터마크 없음', body: '파일은 인스타그램 CDN에서 업로드된 그대로 옵니다. MP4 영상은 원본 해상도, JPG 사진은 공개 한계인 1080px, MP3 오디오는 원본 비트레이트. 재인코딩 없음, 워터마크 부착 없음.' },
      { title: '모든 포스트 유형 지원', body: '릴스, 스토리, 하이라이트, 사진 캐러셀, 프로필 사진, IGTV, 라이브 다시보기, 오디오 추출. 도구 하나, 페이지 8개, 모두 같은 익명 fetch.' },
    ],
    steps: [
      { title: 'URL 붙여넣기', body: '인스타그램에서 포스트나 프로필을 열고 링크 또는 @사용자명을 복사. 원하는 도구 페이지(릴스, 스토리, 사진, 하이라이트, DP, 비디오, 오디오)의 입력란에 붙여넣으세요.' },
      { title: '저장할 것 선택', body: '페이지가 모든 사용 가능한 파일을 업로드 순서로 나열합니다. 캐러셀은 각 프레임이 위치 표시와 함께 따로 표시되고, 릴스는 전체 MP4와 오디오만 MP3 중에 선택할 수 있어요.' },
      { title: '기기에 저장', body: '저장 클릭. 파일이 기본 다운로드 위치로 갑니다 — iOS는 파일 앱, Android는 다운로드 폴더, 데스크톱은 일반 브라우저 폴더. 계정 기록 없음, 추적 없음.' },
    ],
    faq: [
      { q: '인스타그램 계정이 필요한가요?', a: '아니요. 사용자명만 있으면 됩니다. 요청은 이 사이트의 서버를 거치지 당신의 인스타그램 세션을 거치지 않아서, 로그인 정보가 오가지 않고 팔로우 요청도 나가지 않습니다.' },
      { q: '익명 스토리 뷰어인가요?', a: '공개 계정에 한해 그렇습니다. 소유자의 시청자 목록에 당신의 사용자명이 들어가지 않아요(요청 자체에 사용자명이 없으니까). 비공개 계정은 어떤 외부 도구도 — 이 도구 포함 — 접근 불가능, 설계상 그렇습니다.' },
      { q: '다운로드 제한이나 워터마크는요?', a: '일일 제한 없음, 프리미엄 티어 없음, 저장 파일에 박힌 워터마크 없음. MP4와 JPG는 인스타그램이 서빙하는 원본 CDN 파일 그대로. 재인코딩 안 하고, 압축 안 하고, 아무것도 더하지 않습니다.' },
      { q: '왜 릴스, 스토리, 사진, 하이라이트가 페이지가 따로인가요?', a: '각 포맷마다 특성이 달라서요. 릴스는 90초 제한에 오디오 추출 옵션, 스토리는 24시간만 살아있고, 하이라이트는 만료 후에도 남는 핀, 사진은 최대 10장 캐러셀. 페이지를 나누면 각 포맷에 맞는 옵션을 보여줄 수 있습니다. 백엔드는 동일.' },
    ],
  },
};

// Japanese
const ja: Dict = {
  ...en,
  marquee: '★ 無料  ★ ログイン不要  ★ 高画質  ★ ウォーターマークなし  ★ 高速  ★ 無料  ★ ログイン不要  ★ 高画質  ★ ウォーターマークなし  ★ 高速  ',
  tagline: 'ストーリー · リール · 写真 · ハイライト · DP · 音声 — ペーストするだけ、ログイン不要',
  toolHeroTagline: '無料 · ログイン不要 · ウォーターマークなし',
  ui: {
    allTools: '— 全ツール',
    whyUseThis: '— 使う理由',
    howItWorks: '— 使い方',
    faq: '— よくある質問',
    otherTools: '— 他のツール',
    useFree: '無料で使う →',
  },
  footer: {
    privacy: 'プライバシー',
    terms: '規約',
    contact: '連絡先',
    disclaimer: 'Meta または Instagram と提携していません。',
  },
  home: {
    features: [
      { title: 'ログイン不要、アプリ不要', body: '公開 URL かユーザー名を貼り付けて保存を押すだけ。インストールするアプリも、渡す Instagram 認証情報も、競合の様子を見るたびに汚れるフォローグラフもありません。' },
      { title: '元の画質、ウォーターマークなし', body: 'ファイルは Instagram の CDN からアップロードされた状態のまま届きます。MP4 動画は元解像度、JPG 写真は公開上限の 1080px、MP3 音声は元のビットレート。再エンコードなし、ウォーターマーク付与なし。' },
      { title: 'すべての投稿形式に対応', body: 'リール、ストーリー、ハイライト、カルーセル写真、プロフィール画像、IGTV、ライブ再生、音声抽出。ツール 1 つ、ページ 8 枚、すべて同じ匿名フェッチ。' },
    ],
    steps: [
      { title: 'URL をペースト', body: 'Instagram で投稿やプロフィールを開き、リンクまたは @ユーザー名をコピー。リール/ストーリー/写真/ハイライト/DP/動画/音声、目的に合うツールページのフィールドに貼り付け。' },
      { title: '保存対象を選ぶ', body: 'ページに使用可能なファイルがアップロード順に並びます。カルーセルは各フレームが位置情報付きで分けて表示、リールは MP4 全体か音声のみ MP3 を選べます。' },
      { title: '端末に保存', body: '保存をタップ。デフォルトのダウンロード先に届きます。iOS なら Files、Android なら Downloads、デスクトップなら通常のブラウザフォルダ。アカウント記録なし、フォロー追跡なし。' },
    ],
    faq: [
      { q: 'Instagram アカウントは必要ですか？', a: 'いいえ。ユーザー名で十分です。リクエストはこのサイトのサーバーを通り、あなたの Instagram セッションを介さないので、ログイン情報のやり取りはなく、フォローリクエストも飛びません。' },
      { q: '匿名でストーリーを見られますか？', a: '公開アカウントに限り可能です。リクエスト自体にユーザー名が乗らないため、所有者の視聴者リストにあなたの名前は載りません。非公開アカウントは仕様上、サードパーティツールでは見られません — このツールを含めて。' },
      { q: 'ダウンロード制限やウォーターマークは？', a: '日次制限なし、プレミアム階層なし、保存ファイルに焼き付けられたウォーターマークなし。MP4 / JPG は Instagram が配信する元の CDN ファイルそのまま。再エンコードしない、圧縮しない、何も加えない。' },
      { q: 'なぜリール/ストーリー/写真/ハイライトでページが分かれているのですか？', a: '各形式に固有の事情があります。リールは 90 秒上限と音声のみ書き出し、ストーリーは 24 時間限定、ハイライトは期限後も残るピン、写真は最大 10 枚のカルーセル。ページを分けると、形式に適したオプションが見やすくなります。バックエンドは共通。' },
    ],
  },
};

// Simplified Chinese
const zhCN: Dict = {
  ...en,
  marquee: '★ 免费  ★ 无需登录  ★ 高画质  ★ 无水印  ★ 快速  ★ 免费  ★ 无需登录  ★ 高画质  ★ 无水印  ★ 快速  ',
  tagline: '故事 · Reels · 照片 · 精选 · 头像 · 音频 — 一次粘贴,无需登录',
  toolHeroTagline: '免费 · 无需登录 · 无水印',
  ui: {
    allTools: '— 所有工具',
    whyUseThis: '— 为什么用',
    howItWorks: '— 工作原理',
    faq: '— 常见问题',
    otherTools: '— 其他工具',
    useFree: '免费使用 →',
  },
  footer: {
    privacy: '隐私',
    terms: '条款',
    contact: '联系',
    disclaimer: '与 Meta 或 Instagram 无关联。',
  },
  home: {
    features: [
      { title: '无需登录,无需 App', body: '粘贴公开链接或用户名,点击保存即可。无需安装任何应用,不会交出 Instagram 凭据,也不会因为查看竞品而污染你的关注图。' },
      { title: '原始画质,无水印', body: '文件直接来自 Instagram CDN,与上传时一致。MP4 视频原分辨率,JPG 照片公开上限 1080px,MP3 音频原始比特率。不重新编码,不贴水印。' },
      { title: '覆盖所有内容类型', body: 'Reels、故事、精选、轮播照片、头像、IGTV、直播回放、音频提取。一个工具,八个页面,背后都是同一套匿名抓取。' },
    ],
    steps: [
      { title: '粘贴 URL', body: '在 Instagram 上打开帖子或主页,复制链接或 @用户名。粘贴到对应工具页 — Reels、故事、照片、精选、DP、视频、音频。' },
      { title: '选择要保存的内容', body: '页面按上传顺序列出所有可用文件。轮播每一帧分开显示并标注位置,Reels 可选完整 MP4 或仅音频 MP3。' },
      { title: '保存到设备', body: '点击保存。文件会进入默认下载位置 — iOS 的 Files、Android 的 Downloads、桌面浏览器的常规文件夹。不留账号记录,不做后续追踪。' },
    ],
    faq: [
      { q: '需要 Instagram 账号吗?', a: '不需要。用户名就够了。请求经过本站服务器而不是你的 Instagram 会话,所以不会交换登录信息,也不会发出关注请求。' },
      { q: '故事查看是匿名的吗?', a: '公开账号是匿名的。请求本身不携带用户名,所以不会出现在所有者的观看者列表里。私密账号任何第三方工具都打不开 — 包括本站,这是设计如此。' },
      { q: '下载限制和水印呢?', a: '没有每日上限,没有付费层级,保存的文件上没有水印。MP4 和 JPG 都是 Instagram 直接提供的原始 CDN 文件。我们不重新编码、不压缩、不添加任何内容。' },
      { q: '为什么 Reels、故事、照片、精选要分开成不同页面?', a: '每种格式都有自己的特点 — Reels 上限 90 秒并支持仅音频导出,故事只活 24 小时,精选是过期后保留的钉选,照片可以是最多 10 张的轮播。分页可以为每种格式显示合适的选项。后端是统一的。' },
    ],
  },
};

// German
const de: Dict = {
  ...en,
  marquee: '★ KOSTENLOS  ★ KEIN LOGIN  ★ HOHE QUALITÄT  ★ KEIN WASSERZEICHEN  ★ SCHNELL  ★ KOSTENLOS  ★ KEIN LOGIN  ★ HOHE QUALITÄT  ★ KEIN WASSERZEICHEN  ★ SCHNELL  ',
  tagline: 'STORIES · REELS · FOTOS · HIGHLIGHTS · DP · AUDIO — EINMAL EINFÜGEN, KEIN LOGIN',
  toolHeroTagline: 'KOSTENLOS · KEIN LOGIN · KEIN WASSERZEICHEN',
  ui: {
    allTools: '— ALLE TOOLS',
    whyUseThis: '— WARUM DIESES TOOL',
    howItWorks: '— SO FUNKTIONIERT ES',
    faq: '— HÄUFIGE FRAGEN',
    otherTools: '— ANDERE TOOLS',
    useFree: 'KOSTENLOS NUTZEN →',
  },
  footer: {
    privacy: 'DATENSCHUTZ',
    terms: 'AGB',
    contact: 'KONTAKT',
    disclaimer: 'Nicht mit Meta oder Instagram verbunden.',
  },
  home: {
    features: [
      { title: 'Kein Login, keine App', body: 'Öffentliche URL oder Benutzernamen einfügen, Speichern drücken. Nichts zu installieren, keine Instagram-Zugangsdaten weiterzugeben, kein Follower-Graph, der durch Konkurrenzbeobachtung verschmutzt wird.' },
      { title: 'Originalqualität, kein Wasserzeichen', body: 'Dateien kommen vom Instagram-CDN, so wie sie hochgeladen wurden. MP4-Videos in Originalauflösung, JPG-Fotos im öffentlichen 1080px-Limit, MP3-Audio in Originalbitrate. Kein Re-Encoding, kein aufgeklebtes Wasserzeichen.' },
      { title: 'Jeder Posttyp abgedeckt', body: 'Reels, Stories, Highlights, Foto-Karusselle, Profilbilder, IGTV, Live-Wiederholungen, Audio-Rips. Ein Tool, acht fokussierte Seiten, dasselbe anonyme Abrufverfahren dahinter.' },
    ],
    steps: [
      { title: 'URL einfügen', body: 'Beitrag oder Profil auf Instagram öffnen, Link oder @Benutzernamen kopieren. In das Feld der passenden Tool-Seite einfügen — Reels, Stories, Fotos, Highlights, DP, Video oder Audio.' },
      { title: 'Auswählen, was gespeichert wird', body: 'Die Seite listet alle verfügbaren Dateien in Upload-Reihenfolge. Bei Karussells wird jedes Frame separat mit Position angezeigt. Bei Reels wählst du zwischen vollem MP4 und Audio-only MP3.' },
      { title: 'Aufs Gerät speichern', body: 'Speichern drücken. Die Datei landet am Standard-Download-Ort — Files unter iOS, Downloads unter Android, der normale Browser-Ordner am Desktop. Kein Konto-Eintrag, kein Nachfassen.' },
    ],
    faq: [
      { q: 'Brauche ich ein Instagram-Konto?', a: 'Nein. Der Benutzername reicht. Die Anfrage läuft über die Server dieser Seite, nicht über deine Instagram-Sitzung — kein Login wird ausgetauscht, keine Folgeanfrage geht raus.' },
      { q: 'Ist der Story-Viewer anonym?', a: 'Bei öffentlichen Konten, ja. Die Zuschauerliste des Eigentümers bekommt deinen Benutzernamen nicht, weil die Anfrage keinen mitführt. Private Konten sind für jedes Drittwerkzeug — auch dieses — durch Design gesperrt.' },
      { q: 'Was ist mit Download-Limits oder Wasserzeichen?', a: 'Keine Tagesgrenze, keine Premium-Stufe, kein Wasserzeichen auf dem, was du speicherst. Das MP4 oder JPG ist die originale CDN-Datei, exakt so, wie Instagram sie ausliefert. Wir kodieren nicht neu, wir komprimieren nicht, wir fügen nichts hinzu.' },
      { q: 'Warum gibt es eigene Seiten für Reels, Stories, Fotos, Highlights?', a: 'Jedes Format hat seine Besonderheiten — Reels max. 90 Sekunden mit Audio-only-Export, Stories leben 24 Stunden, Highlights sind die fixierten, die danach bleiben, Fotos können Karussells mit bis zu zehn Bildern sein. Getrennte Seiten halten die jeweils passenden Optionen sichtbar. Backend ist überall dasselbe.' },
    ],
  },
};

// Spanish
const es: Dict = {
  ...en,
  marquee: '★ GRATIS  ★ SIN LOGIN  ★ ALTA CALIDAD  ★ SIN MARCA DE AGUA  ★ RÁPIDO  ★ GRATIS  ★ SIN LOGIN  ★ ALTA CALIDAD  ★ SIN MARCA DE AGUA  ★ RÁPIDO  ',
  tagline: 'HISTORIAS · REELS · FOTOS · DESTACADOS · DP · AUDIO — UN PEGADO, SIN LOGIN',
  toolHeroTagline: 'GRATIS · SIN LOGIN · SIN MARCA DE AGUA',
  ui: {
    allTools: '— TODAS LAS HERRAMIENTAS',
    whyUseThis: '— POR QUÉ USARLO',
    howItWorks: '— CÓMO FUNCIONA',
    faq: '— PREGUNTAS',
    otherTools: '— OTRAS HERRAMIENTAS',
    useFree: 'USAR GRATIS →',
  },
  footer: {
    privacy: 'PRIVACIDAD',
    terms: 'TÉRMINOS',
    contact: 'CONTACTO',
    disclaimer: 'No afiliado con Meta o Instagram.',
  },
  home: {
    features: [
      { title: 'Sin login, sin app', body: 'Pega una URL pública o un nombre de usuario, dale a guardar. Nada que instalar, sin entregar credenciales de Instagram, sin contaminar el grafo de seguidores con tu cuenta revisando a la competencia.' },
      { title: 'Calidad original, sin marca de agua', body: 'Los archivos vienen del CDN de Instagram tal como se subieron. Vídeo MP4 a la resolución original, fotos JPG al máximo público de 1080px, audio MP3 a la tasa de bits original. Sin recodificar, sin marca de agua pegada.' },
      { title: 'Cubre todos los tipos de publicación', body: 'Reels, historias, destacados, carruseles de fotos, fotos de perfil, IGTV, repeticiones de directo, extracción de audio. Una herramienta, ocho páginas enfocadas, el mismo fetch anónimo detrás.' },
    ],
    steps: [
      { title: 'Pega la URL', body: 'Abre la publicación o el perfil en Instagram, copia el enlace o el @usuario. Pégalo en el campo de la página que corresponda — Reels, historias, fotos, destacados, DP, vídeo o audio.' },
      { title: 'Elige qué guardar', body: 'La página lista todos los archivos disponibles en orden de subida. En carruseles cada cuadro aparece por separado con su posición. Para Reels eliges entre MP4 completo y MP3 solo audio.' },
      { title: 'Guarda en el dispositivo', body: 'Dale a guardar. El archivo cae en tu ubicación de descarga predeterminada — Files en iOS, Descargas en Android, la carpeta habitual del navegador en escritorio. Sin registro de cuenta, sin seguimiento.' },
    ],
    faq: [
      { q: '¿Necesito una cuenta de Instagram?', a: 'No. Con el nombre de usuario basta. La solicitud pasa por los servidores de este sitio, no por tu sesión de Instagram, así que no se intercambia ningún login y no sale ninguna solicitud de seguimiento.' },
      { q: '¿El visor de historias es anónimo?', a: 'Para cuentas públicas, sí. La lista de espectadores del propietario no recibe tu nombre de usuario porque la solicitud no lo lleva. Las cuentas privadas están vetadas para cualquier herramienta externa — esta incluida — por diseño.' },
      { q: '¿Hay límites de descarga o marcas de agua?', a: 'Sin límite diario, sin nivel premium, sin marca de agua incrustada en lo que guardas. El MP4 o JPG es el archivo original del CDN, tal cual lo sirve Instagram. No recodificamos, no comprimimos, no añadimos nada.' },
      { q: '¿Por qué hay páginas separadas para Reels, historias, fotos y destacados?', a: 'Cada formato tiene sus particularidades — los Reels topan en 90 segundos y permiten exportar solo audio, las historias viven 24 horas, los destacados son los fijados que sobreviven, las fotos pueden ser carruseles de hasta diez imágenes. Separar las páginas mantiene visibles las opciones adecuadas para cada uno. El backend es el mismo.' },
    ],
  },
};

// Portuguese
const pt: Dict = {
  ...en,
  marquee: '★ GRÁTIS  ★ SEM LOGIN  ★ ALTA QUALIDADE  ★ SEM MARCA D\'ÁGUA  ★ RÁPIDO  ★ GRÁTIS  ★ SEM LOGIN  ★ ALTA QUALIDADE  ★ SEM MARCA D\'ÁGUA  ★ RÁPIDO  ',
  tagline: 'STORIES · REELS · FOTOS · DESTAQUES · DP · ÁUDIO — UM COLAR, SEM LOGIN',
  toolHeroTagline: "GRÁTIS · SEM LOGIN · SEM MARCA D'ÁGUA",
  ui: {
    allTools: '— TODAS AS FERRAMENTAS',
    whyUseThis: '— POR QUE USAR',
    howItWorks: '— COMO FUNCIONA',
    faq: '— PERGUNTAS',
    otherTools: '— OUTRAS FERRAMENTAS',
    useFree: 'USAR GRÁTIS →',
  },
  footer: {
    privacy: 'PRIVACIDADE',
    terms: 'TERMOS',
    contact: 'CONTATO',
    disclaimer: 'Não afiliado à Meta ou Instagram.',
  },
  home: {
    features: [
      { title: 'Sem login, sem app', body: 'Cola uma URL pública ou nome de usuário, aperta salvar. Nada para instalar, sem entregar credenciais do Instagram, sem poluir o grafo de seguidores com sua conta checando concorrentes.' },
      { title: 'Qualidade original, sem marca d\'água', body: 'Os arquivos vêm do CDN do Instagram como foram enviados. Vídeo MP4 na resolução original, fotos JPG no limite público de 1080px, áudio MP3 na taxa original. Sem recodificar, sem marca d\'água colada.' },
      { title: 'Cobre todos os tipos de post', body: 'Reels, stories, destaques, carrosséis de fotos, fotos de perfil, IGTV, replay de live, extração de áudio. Uma ferramenta, oito páginas focadas, o mesmo fetch anônimo por trás de cada uma.' },
    ],
    steps: [
      { title: 'Cole a URL', body: 'Abra o post ou o perfil no Instagram, copie o link ou o @usuário. Cole no campo da página correspondente — Reels, stories, fotos, destaques, DP, vídeo ou áudio.' },
      { title: 'Escolha o que salvar', body: 'A página lista todos os arquivos disponíveis na ordem de upload. Em carrosséis cada quadro aparece separado com a posição. Em Reels, você escolhe entre MP4 completo ou MP3 só áudio.' },
      { title: 'Salve no dispositivo', body: 'Aperte salvar. O arquivo cai no local padrão de download — Files no iOS, Downloads no Android, a pasta comum do navegador no desktop. Sem registro de conta, sem follow-up.' },
    ],
    faq: [
      { q: 'Preciso de conta no Instagram?', a: 'Não. O nome de usuário basta. A requisição passa pelos servidores deste site, não pela sua sessão do Instagram, então nenhum login é trocado e nenhum pedido de seguir é disparado.' },
      { q: 'O visualizador de stories é anônimo?', a: 'Para contas públicas, sim. A lista de visualizadores do dono não recebe seu nome de usuário porque a requisição não carrega um. Contas privadas estão vetadas para qualquer ferramenta de terceiros — esta incluída — por design.' },
      { q: 'Há limites de download ou marca d\'água?', a: 'Sem limite diário, sem camada premium, sem marca d\'água carimbada no que você salva. O MP4 ou JPG é o arquivo original do CDN, exatamente como o Instagram entrega. Não recodificamos, não comprimimos, não adicionamos nada.' },
      { q: 'Por que tem páginas separadas para Reels, stories, fotos e destaques?', a: 'Cada formato tem suas peculiaridades — Reels limitam em 90 segundos e permitem exportar só áudio, stories duram 24 horas, destaques são os fixados que sobrevivem, fotos podem ser carrosséis de até dez imagens. Separar as páginas mantém visíveis as opções certas pra cada um. O backend é o mesmo.' },
    ],
  },
};

// French
const fr: Dict = {
  ...en,
  marquee: '★ GRATUIT  ★ SANS LOGIN  ★ HAUTE QUALITÉ  ★ SANS FILIGRANE  ★ RAPIDE  ★ GRATUIT  ★ SANS LOGIN  ★ HAUTE QUALITÉ  ★ SANS FILIGRANE  ★ RAPIDE  ',
  tagline: 'STORIES · REELS · PHOTOS · À LA UNE · PHOTO DE PROFIL · AUDIO — UN COLLAGE, SANS LOGIN',
  toolHeroTagline: 'GRATUIT · SANS LOGIN · SANS FILIGRANE',
  ui: {
    allTools: '— TOUS LES OUTILS',
    whyUseThis: '— POURQUOI CECI',
    howItWorks: '— COMMENT ÇA MARCHE',
    faq: '— FAQ',
    otherTools: '— AUTRES OUTILS',
    useFree: 'UTILISER GRATUITEMENT →',
  },
  footer: {
    privacy: 'CONFIDENTIALITÉ',
    terms: 'CONDITIONS',
    contact: 'CONTACT',
    disclaimer: 'Non affilié à Meta ou Instagram.',
  },
  home: {
    features: [
      { title: 'Sans login, sans appli', body: 'Colle une URL publique ou un pseudo, clique sur enregistrer. Rien à installer, aucun identifiant Instagram à céder, pas de graphe de followers pollué par ton compte qui scrute la concurrence.' },
      { title: 'Qualité d\'origine, sans filigrane', body: 'Les fichiers proviennent du CDN d\'Instagram tels qu\'ils ont été déposés. Vidéo MP4 en résolution source, photos JPG au plafond public de 1080px, audio MP3 au débit source. Pas de ré-encodage, pas de filigrane collé dessus.' },
      { title: 'Tous les types de post couverts', body: 'Reels, stories, à la une, carrousels photos, photos de profil, IGTV, replays de lives, extraction audio. Un outil, huit pages dédiées, le même fetch anonyme derrière chacune.' },
    ],
    steps: [
      { title: 'Colle l\'URL', body: 'Ouvre le post ou le profil sur Instagram, copie le lien ou le @pseudo. Colle dans le champ de la page qui correspond — Reels, stories, photos, à la une, DP, vidéo ou audio.' },
      { title: 'Choisis ce que tu sauvegardes', body: 'La page liste tous les fichiers disponibles dans l\'ordre d\'envoi. Pour les carrousels, chaque image apparaît séparément avec sa position. Pour les Reels, tu choisis entre MP4 complet et MP3 audio seul.' },
      { title: 'Sauvegarde sur l\'appareil', body: 'Clique sur enregistrer. Le fichier atterrit dans ton emplacement de téléchargement par défaut — Files sur iOS, Téléchargements sur Android, le dossier habituel du navigateur sur ordinateur. Pas de trace de compte, pas de suivi.' },
    ],
    faq: [
      { q: 'Faut-il un compte Instagram ?', a: 'Non. Le pseudo suffit. La requête passe par les serveurs de ce site, pas par ta session Instagram, donc aucun login n\'est échangé et aucune demande de suivi n\'est envoyée.' },
      { q: 'Le visualiseur de stories est-il anonyme ?', a: 'Pour les comptes publics, oui. La liste des spectateurs du propriétaire ne reçoit pas ton pseudo car la requête n\'en porte pas. Les comptes privés sont hors-limite pour tout outil tiers — celui-ci compris — par conception.' },
      { q: 'Limites de téléchargement ou filigranes ?', a: 'Pas de plafond journalier, pas de palier premium, pas de filigrane apposé sur ce que tu enregistres. Le MP4 ou JPG est le fichier CDN d\'origine, exactement tel qu\'Instagram le sert. On ne ré-encode pas, on ne compresse pas, on n\'ajoute rien.' },
      { q: 'Pourquoi des pages séparées pour Reels, stories, photos, à la une ?', a: 'Chaque format a ses spécificités — les Reels plafonnent à 90 secondes avec export audio seul, les stories vivent 24 heures, les à la une sont celles épinglées qui survivent, les photos peuvent être des carrousels de dix images. Des pages séparées gardent visibles les options adaptées à chaque format. Le backend est le même.' },
    ],
  },
};

// All 21 locales — others fall back to English for body content via spread
const ar: Dict = {
  ...en,
  marquee: '★ مجاني  ★ بدون تسجيل  ★ جودة عالية  ★ بدون علامة مائية  ★ سريع  ★ مجاني  ★ بدون تسجيل  ★ جودة عالية  ★ بدون علامة مائية  ★ سريع  ',
  tagline: 'القصص · الريلز · الصور · الأبرز · صورة الملف · الصوت — لصقة واحدة، بدون تسجيل',
  toolHeroTagline: 'مجاني · بدون تسجيل · بدون علامة مائية',
  ui: {
    allTools: '— جميع الأدوات',
    whyUseThis: '— لماذا تستخدمها',
    howItWorks: '— كيف تعمل',
    faq: '— الأسئلة',
    otherTools: '— أدوات أخرى',
    useFree: 'استخدم مجاناً →',
  },
  footer: {
    privacy: 'الخصوصية',
    terms: 'الشروط',
    contact: 'اتصال',
    disclaimer: 'غير مرتبط بـ Meta أو Instagram.',
  },
};

const it: Dict = {
  ...en,
  marquee: '★ GRATIS  ★ NIENTE LOGIN  ★ ALTA QUALITÀ  ★ NIENTE FILIGRANA  ★ VELOCE  ★ GRATIS  ★ NIENTE LOGIN  ★ ALTA QUALITÀ  ★ NIENTE FILIGRANA  ★ VELOCE  ',
  tagline: 'STORIE · REELS · FOTO · IN EVIDENZA · DP · AUDIO — UN INCOLLA, NIENTE LOGIN',
  toolHeroTagline: 'GRATIS · NIENTE LOGIN · NIENTE FILIGRANA',
  ui: {
    allTools: '— TUTTI GLI STRUMENTI',
    whyUseThis: '— PERCHÉ USARLO',
    howItWorks: '— COME FUNZIONA',
    faq: '— DOMANDE',
    otherTools: '— ALTRI STRUMENTI',
    useFree: 'USA GRATIS →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'TERMINI',
    contact: 'CONTATTO',
    disclaimer: 'Non affiliato a Meta o Instagram.',
  },
};

const ru: Dict = {
  ...en,
  marquee: '★ БЕСПЛАТНО  ★ БЕЗ ВХОДА  ★ ВЫСОКОЕ КАЧЕСТВО  ★ БЕЗ ВОДЯНОГО ЗНАКА  ★ БЫСТРО  ★ БЕСПЛАТНО  ★ БЕЗ ВХОДА  ★ ВЫСОКОЕ КАЧЕСТВО  ★ БЕЗ ВОДЯНОГО ЗНАКА  ★ БЫСТРО  ',
  tagline: 'ИСТОРИИ · REELS · ФОТО · АКТУАЛЬНОЕ · АВАТАР · АУДИО — ОДНА ВСТАВКА, БЕЗ ВХОДА',
  toolHeroTagline: 'БЕСПЛАТНО · БЕЗ ВХОДА · БЕЗ ВОДЯНОГО ЗНАКА',
  ui: {
    allTools: '— ВСЕ ИНСТРУМЕНТЫ',
    whyUseThis: '— ЗАЧЕМ',
    howItWorks: '— КАК ЭТО РАБОТАЕТ',
    faq: '— ВОПРОСЫ',
    otherTools: '— ДРУГИЕ ИНСТРУМЕНТЫ',
    useFree: 'БЕСПЛАТНО →',
  },
  footer: {
    privacy: 'ПРИВАТНОСТЬ',
    terms: 'УСЛОВИЯ',
    contact: 'КОНТАКТ',
    disclaimer: 'Не связано с Meta или Instagram.',
  },
};

const tr: Dict = {
  ...en,
  marquee: '★ ÜCRETSİZ  ★ GİRİŞSİZ  ★ YÜKSEK KALİTE  ★ FİLİGRANSIZ  ★ HIZLI  ★ ÜCRETSİZ  ★ GİRİŞSİZ  ★ YÜKSEK KALİTE  ★ FİLİGRANSIZ  ★ HIZLI  ',
  tagline: 'HİKAYELER · REELS · FOTOĞRAFLAR · ÖNE ÇIKAN · DP · SES — TEK YAPIŞTIRMA, GİRİŞSİZ',
  toolHeroTagline: 'ÜCRETSİZ · GİRİŞSİZ · FİLİGRANSIZ',
  ui: {
    allTools: '— TÜM ARAÇLAR',
    whyUseThis: '— NEDEN BUNU',
    howItWorks: '— NASIL ÇALIŞIR',
    faq: '— SSS',
    otherTools: '— DİĞER ARAÇLAR',
    useFree: 'ÜCRETSİZ KULLAN →',
  },
  footer: {
    privacy: 'GİZLİLİK',
    terms: 'ŞARTLAR',
    contact: 'İLETİŞİM',
    disclaimer: 'Meta veya Instagram ile ilişkili değildir.',
  },
};

const id: Dict = {
  ...en,
  marquee: '★ GRATIS  ★ TANPA LOGIN  ★ KUALITAS TINGGI  ★ TANPA WATERMARK  ★ CEPAT  ★ GRATIS  ★ TANPA LOGIN  ★ KUALITAS TINGGI  ★ TANPA WATERMARK  ★ CEPAT  ',
  tagline: 'STORY · REELS · FOTO · SOROTAN · DP · AUDIO — SEKALI TEMPEL, TANPA LOGIN',
  toolHeroTagline: 'GRATIS · TANPA LOGIN · TANPA WATERMARK',
  ui: {
    allTools: '— SEMUA ALAT',
    whyUseThis: '— MENGAPA INI',
    howItWorks: '— CARA KERJA',
    faq: '— PERTANYAAN',
    otherTools: '— ALAT LAIN',
    useFree: 'GUNAKAN GRATIS →',
  },
  footer: {
    privacy: 'PRIVASI',
    terms: 'KETENTUAN',
    contact: 'KONTAK',
    disclaimer: 'Tidak berafiliasi dengan Meta atau Instagram.',
  },
};

const nl: Dict = {
  ...en,
  marquee: '★ GRATIS  ★ GEEN LOGIN  ★ HOGE KWALITEIT  ★ GEEN WATERMERK  ★ SNEL  ★ GRATIS  ★ GEEN LOGIN  ★ HOGE KWALITEIT  ★ GEEN WATERMERK  ★ SNEL  ',
  tagline: 'STORIES · REELS · FOTOS · HIGHLIGHTS · DP · AUDIO — EEN KEER PLAKKEN, GEEN LOGIN',
  toolHeroTagline: 'GRATIS · GEEN LOGIN · GEEN WATERMERK',
  ui: {
    allTools: '— ALLE TOOLS',
    whyUseThis: '— WAAROM DIT',
    howItWorks: '— HOE HET WERKT',
    faq: '— VRAGEN',
    otherTools: '— ANDERE TOOLS',
    useFree: 'GRATIS GEBRUIKEN →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'VOORWAARDEN',
    contact: 'CONTACT',
    disclaimer: 'Niet verbonden met Meta of Instagram.',
  },
};

const pl: Dict = {
  ...en,
  marquee: '★ ZA DARMO  ★ BEZ LOGOWANIA  ★ WYSOKA JAKOŚĆ  ★ BEZ ZNAKU WODNEGO  ★ SZYBKO  ★ ZA DARMO  ★ BEZ LOGOWANIA  ★ WYSOKA JAKOŚĆ  ★ BEZ ZNAKU WODNEGO  ★ SZYBKO  ',
  tagline: 'RELACJE · REELS · ZDJĘCIA · WYRÓŻNIONE · DP · AUDIO — JEDNO WKLEJENIE, BEZ LOGOWANIA',
  toolHeroTagline: 'ZA DARMO · BEZ LOGOWANIA · BEZ ZNAKU WODNEGO',
  ui: {
    allTools: '— WSZYSTKIE NARZĘDZIA',
    whyUseThis: '— DLACZEGO TO',
    howItWorks: '— JAK TO DZIAŁA',
    faq: '— PYTANIA',
    otherTools: '— INNE NARZĘDZIA',
    useFree: 'UŻYJ ZA DARMO →',
  },
  footer: {
    privacy: 'PRYWATNOŚĆ',
    terms: 'WARUNKI',
    contact: 'KONTAKT',
    disclaimer: 'Nie powiązane z Meta ani Instagramem.',
  },
};

const cs: Dict = {
  ...en,
  marquee: '★ ZDARMA  ★ BEZ PŘIHLÁŠENÍ  ★ VYSOKÁ KVALITA  ★ BEZ VODOZNAKU  ★ RYCHLE  ★ ZDARMA  ★ BEZ PŘIHLÁŠENÍ  ★ VYSOKÁ KVALITA  ★ BEZ VODOZNAKU  ★ RYCHLE  ',
  tagline: 'STORIES · REELS · FOTKY · HIGHLIGHTY · DP · AUDIO — JEDNO VLOŽENÍ, BEZ PŘIHLÁŠENÍ',
  toolHeroTagline: 'ZDARMA · BEZ PŘIHLÁŠENÍ · BEZ VODOZNAKU',
  ui: {
    allTools: '— VŠECHNY NÁSTROJE',
    whyUseThis: '— PROČ TENTO',
    howItWorks: '— JAK FUNGUJE',
    faq: '— OTÁZKY',
    otherTools: '— DALŠÍ NÁSTROJE',
    useFree: 'POUŽÍT ZDARMA →',
  },
  footer: {
    privacy: 'SOUKROMÍ',
    terms: 'PODMÍNKY',
    contact: 'KONTAKT',
    disclaimer: 'Není spojeno s Meta ani Instagramem.',
  },
};

const ro: Dict = {
  ...en,
  marquee: '★ GRATUIT  ★ FĂRĂ LOGIN  ★ CALITATE ÎNALTĂ  ★ FĂRĂ FILIGRAN  ★ RAPID  ★ GRATUIT  ★ FĂRĂ LOGIN  ★ CALITATE ÎNALTĂ  ★ FĂRĂ FILIGRAN  ★ RAPID  ',
  tagline: 'STORY · REELS · POZE · EVIDENȚIATE · DP · AUDIO — O LIPIRE, FĂRĂ LOGIN',
  toolHeroTagline: 'GRATUIT · FĂRĂ LOGIN · FĂRĂ FILIGRAN',
  ui: {
    allTools: '— TOATE INSTRUMENTELE',
    whyUseThis: '— DE CE',
    howItWorks: '— CUM FUNCȚIONEAZĂ',
    faq: '— ÎNTREBĂRI',
    otherTools: '— ALTE INSTRUMENTE',
    useFree: 'FOLOSEȘTE GRATUIT →',
  },
  footer: {
    privacy: 'CONFIDENȚIALITATE',
    terms: 'TERMENI',
    contact: 'CONTACT',
    disclaimer: 'Nu este afiliat cu Meta sau Instagram.',
  },
};

const el: Dict = {
  ...en,
  marquee: '★ ΔΩΡΕΑΝ  ★ ΧΩΡΙΣ ΣΥΝΔΕΣΗ  ★ ΥΨΗΛΗ ΠΟΙΟΤΗΤΑ  ★ ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ  ★ ΓΡΗΓΟΡΟ  ★ ΔΩΡΕΑΝ  ★ ΧΩΡΙΣ ΣΥΝΔΕΣΗ  ★ ΥΨΗΛΗ ΠΟΙΟΤΗΤΑ  ★ ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ  ★ ΓΡΗΓΟΡΟ  ',
  tagline: 'STORIES · REELS · ΦΩΤΟΓΡΑΦΙΕΣ · HIGHLIGHTS · DP · ΗΧΟΣ — ΜΙΑ ΕΠΙΚΟΛΛΗΣΗ, ΧΩΡΙΣ ΣΥΝΔΕΣΗ',
  toolHeroTagline: 'ΔΩΡΕΑΝ · ΧΩΡΙΣ ΣΥΝΔΕΣΗ · ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ',
  ui: {
    allTools: '— ΟΛΑ ΤΑ ΕΡΓΑΛΕΙΑ',
    whyUseThis: '— ΓΙΑΤΙ ΑΥΤΟ',
    howItWorks: '— ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ',
    faq: '— ΕΡΩΤΗΣΕΙΣ',
    otherTools: '— ΑΛΛΑ ΕΡΓΑΛΕΙΑ',
    useFree: 'ΧΡΗΣΗ ΔΩΡΕΑΝ →',
  },
  footer: {
    privacy: 'ΑΠΟΡΡΗΤΟ',
    terms: 'ΟΡΟΙ',
    contact: 'ΕΠΙΚΟΙΝΩΝΙΑ',
    disclaimer: 'Δεν συνδέεται με τη Meta ή το Instagram.',
  },
};

const th: Dict = {
  ...en,
  marquee: '★ ฟรี  ★ ไม่ต้องล็อกอิน  ★ คุณภาพสูง  ★ ไม่มีลายน้ำ  ★ เร็ว  ★ ฟรี  ★ ไม่ต้องล็อกอิน  ★ คุณภาพสูง  ★ ไม่มีลายน้ำ  ★ เร็ว  ',
  tagline: 'สตอรี่ · รีลส์ · ภาพ · ไฮไลต์ · DP · เสียง — วางครั้งเดียว ไม่ต้องล็อกอิน',
  toolHeroTagline: 'ฟรี · ไม่ต้องล็อกอิน · ไม่มีลายน้ำ',
  ui: {
    allTools: '— ทุกเครื่องมือ',
    whyUseThis: '— ทำไมใช้',
    howItWorks: '— วิธีทำงาน',
    faq: '— คำถาม',
    otherTools: '— เครื่องมืออื่น',
    useFree: 'ใช้ฟรี →',
  },
  footer: {
    privacy: 'ความเป็นส่วนตัว',
    terms: 'ข้อตกลง',
    contact: 'ติดต่อ',
    disclaimer: 'ไม่เกี่ยวข้องกับ Meta หรือ Instagram',
  },
};

const bn: Dict = {
  ...en,
  marquee: '★ ফ্রি  ★ লগইন ছাড়া  ★ উচ্চ মানের  ★ ওয়াটারমার্ক ছাড়া  ★ দ্রুত  ★ ফ্রি  ★ লগইন ছাড়া  ★ উচ্চ মানের  ★ ওয়াটারমার্ক ছাড়া  ★ দ্রুত  ',
  tagline: 'স্টোরি · রিলস · ছবি · হাইলাইট · ডিপি · অডিও — এক পেস্টে, লগইন ছাড়া',
  toolHeroTagline: 'ফ্রি · লগইন ছাড়া · ওয়াটারমার্ক ছাড়া',
  ui: {
    allTools: '— সব টুল',
    whyUseThis: '— কেন এটা',
    howItWorks: '— কীভাবে কাজ করে',
    faq: '— প্রশ্ন',
    otherTools: '— অন্য টুল',
    useFree: 'ফ্রি ব্যবহার →',
  },
  footer: {
    privacy: 'প্রাইভেসি',
    terms: 'শর্তাবলী',
    contact: 'যোগাযোগ',
    disclaimer: 'Meta বা Instagram-এর সাথে কোনো সম্পর্ক নেই।',
  },
};

const sr: Dict = {
  ...en,
  marquee: '★ BESPLATNO  ★ BEZ PRIJAVE  ★ VISOK KVALITET  ★ BEZ VODENOG ŽIGA  ★ BRZO  ★ BESPLATNO  ★ BEZ PRIJAVE  ★ VISOK KVALITET  ★ BEZ VODENOG ŽIGA  ★ BRZO  ',
  tagline: 'PRIČE · REELS · SLIKE · ISTAKNUTO · DP · ZVUK — JEDNO LEPLJENJE, BEZ PRIJAVE',
  toolHeroTagline: 'BESPLATNO · BEZ PRIJAVE · BEZ VODENOG ŽIGA',
  ui: {
    allTools: '— SVI ALATI',
    whyUseThis: '— ZAŠTO OVO',
    howItWorks: '— KAKO RADI',
    faq: '— PITANJA',
    otherTools: '— DRUGI ALATI',
    useFree: 'KORISTI BESPLATNO →',
  },
  footer: {
    privacy: 'PRIVATNOST',
    terms: 'USLOVI',
    contact: 'KONTAKT',
    disclaimer: 'Nije povezano sa Meta ili Instagram.',
  },
};

export const DICTS: Record<Locale, Dict> = {
  en, ko, ja, 'zh-CN': zhCN, de, fr, es, pt, it, ru, ar, tr,
  id, nl, pl, cs, ro, el, th, bn, sr,
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}
