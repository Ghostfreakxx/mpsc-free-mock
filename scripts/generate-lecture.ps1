param([string]$OutputDirectory = "$PSScriptRoot/../public/lectures/units")
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$lesson = Get-Content -LiteralPath "$PSScriptRoot/../app/data/jee-lecture.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$output = [System.IO.Path]::GetFullPath($OutputDirectory)
[System.IO.Directory]::CreateDirectory($output) | Out-Null
$voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice.SelectVoice($lesson.voice)
$voice.Rate = -1
$format = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(16000, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$segments = @()
$index = 0
try {
  foreach ($segment in $lesson.segments) {
    $sentences = [regex]::Split($segment.english, '(?<=[.!?])\s+')
    foreach ($sentence in $sentences) {
      $name = ('sentence-{0:D3}.wav' -f $index)
      $voice.SetOutputToWaveFile((Join-Path $output $name), $format)
      $voice.Speak($sentence)
      $voice.SetOutputToNull()
      $segments += [pscustomobject]@{ file = $name; text = $sentence; chapter = [array]::IndexOf($lesson.segments, $segment) }
      $index++
    }
  }
} finally { $voice.Dispose() }
$segments | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $output 'sentences.json') -Encoding UTF8
Write-Output "Generated $index sentences with $($lesson.voice)."
