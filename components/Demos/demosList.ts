import { StaticImageData } from 'next/image';

interface IDemos {
  name: string;
  title: string;
  description: string;
  url: string;
  imgSrc: StaticImageData;
}
import MachineTranslation from 'public/images/static/demos/machine-translation.png';
import LightweightGan from 'public/images/static/demos/lightweight-gan.png';
import FastSpeech from 'public/images/static/demos/fastSpeech.png';
import SimpleMnist from 'public/images/static/demos/simple-mnist.png';

const demosList: IDemos[] = [
  {
    name: 'machine-translation',
    title: 'Machine translation',
    description:
      "Training logs of a neural translation model(from WMT'19 competition).",
    url: 'https://play.aimstack.io/nmt/metrics?grouping=O-JTdCJTIyY29sb3IlMjI6JTVCJTIycnVuLnBhcmFtcy5ocGFyYW1zLm1heF9rJTIyJTVELCUyMnN0cm9rZSUyMjolNUIlNUQsJTIyY2hhcnQlMjI6JTVCJTIybmFtZSUyMiwlMjJjb250ZXh0LnN1YnNldCUyMiU1RCwlMjJyZXZlcnNlTW9kZSUyMjolN0IlMjJjb2xvciUyMjpmYWxzZSwlMjJzdHJva2UlMjI6ZmFsc2UsJTIyY2hhcnQlMjI6ZmFsc2UlN0QsJTIyaXNBcHBsaWVkJTIyOiU3QiUyMmNvbG9yJTIyOnRydWUsJTIyc3Ryb2tlJTIyOnRydWUsJTIyY2hhcnQlMjI6dHJ1ZSU3RCwlMjJwZXJzaXN0ZW5jZSUyMjolN0IlMjJjb2xvciUyMjpmYWxzZSwlMjJzdHJva2UlMjI6ZmFsc2UlN0QsJTIyc2VlZCUyMjolN0IlMjJjb2xvciUyMjoxMCwlMjJzdHJva2UlMjI6MTAlN0QsJTIycGFsZXR0ZUluZGV4JTIyOjAlN0Q&chart=O-JTdCJTIyaGlnaGxpZ2h0TW9kZSUyMjoyLCUyMmlnbm9yZU91dGxpZXJzJTIyOnRydWUsJTIyem9vbSUyMjolN0IlMjJhY3RpdmUlMjI6ZmFsc2UsJTIybW9kZSUyMjowLCUyMmhpc3RvcnklMjI6JTVCJTVEJTdELCUyMmF4ZXNTY2FsZVR5cGUlMjI6JTdCJTIyeEF4aXMlMjI6JTIybGluZWFyJTIyLCUyMnlBeGlzJTIyOiUyMmxpbmVhciUyMiU3RCwlMjJheGVzU2NhbGVSYW5nZSUyMjolN0IlMjJ5QXhpcyUyMjolN0IlN0QsJTIyeEF4aXMlMjI6JTdCJTdEJTdELCUyMnNtb290aGluZyUyMjolN0IlMjJhbGdvcml0aG0lMjI6JTIyRVhQT05FTlRJQUxfTU9WSU5HX0FWRVJBR0UlMjIsJTIyZmFjdG9yJTIyOjAsJTIyY3VydmVJbnRlcnBvbGF0aW9uJTIyOiUyMmN1cnZlTGluZWFyJTIyLCUyMmlzQXBwbGllZCUyMjpmYWxzZSU3RCwlMjJhbGlnbm1lbnRDb25maWclMjI6JTdCJTIybWV0cmljJTIyOiUyMiUyMiwlMjJ0eXBlJTIyOiUyMnN0ZXAlMjIlN0QsJTIyZGVuc2l0eVR5cGUlMjI6NTAwLCUyMmFnZ3JlZ2F0aW9uQ29uZmlnJTIyOiU3QiUyMm1ldGhvZHMlMjI6JTdCJTIyYXJlYSUyMjoxLCUyMmxpbmUlMjI6MCU3RCwlMjJpc0FwcGxpZWQlMjI6dHJ1ZSwlMjJpc0VuYWJsZWQlMjI6dHJ1ZSU3RCwlMjJ0b29sdGlwJTIyOiU3QiUyMmFwcGVhcmFuY2UlMjI6JTIyYXV0byUyMiwlMjJkaXNwbGF5JTIyOnRydWUsJTIyc2VsZWN0ZWRGaWVsZHMlMjI6JTVCJTVELCUyMnNlbGVjdGVkUGFyYW1zJTIyOiU1QiU1RCU3RCwlMjJsZWdlbmRzJTIyOiU3QiUyMmRpc3BsYXklMjI6dHJ1ZSwlMjJtb2RlJTIyOiUyMnBpbm5lZCUyMiU3RCwlMjJmb2N1c2VkU3RhdGUlMjI6JTdCJTIyYWN0aXZlJTIyOnRydWUsJTIya2V5JTIyOiUyMk8tSlRkQ0pUSXljblZ1U0dGemFDVXlNam9sTWpKa1lUTmtNV1UzSlRJeUxDVXlNbTFsZEhKcFkwNWhiV1VsTWpJNkpUSXlZbVZ6ZEY5c2IzTnpKVEl5TENVeU1uUnlZV05sUTI5dWRHVjRkQ1V5TWpvbE4wSWxNakp6ZFdKelpYUWxNakk2SlRJeWRtRnNKVEl5SlRkRUpUZEUlMjIsJTIyeFZhbHVlJTIyOjIxLCUyMnlWYWx1ZSUyMjozLjQ3Mzk5OTk3NzEsJTIyY2hhcnRJbmRleCUyMjowLCUyMnZpc0lkJTIyOiUyMjAlMjIlN0QlN0Q&select=O-JTdCJTIyb3B0aW9ucyUyMjolNUIlN0IlMjJsYWJlbCUyMjolMjJiZXN0X2xvc3MlMjIsJTIyZ3JvdXAlMjI6JTIyYmVzdF9sb3NzJTIyLCUyMnR5cGUlMjI6JTIybWV0cmljcyUyMiwlMjJjb2xvciUyMjolMjIjN0E0Q0UwJTIyLCUyMmtleSUyMjolMjJPLUpUZENKVEl5YldWMGNtbGpUbUZ0WlNVeU1qb2xNakppWlhOMFgyeHZjM01sTWpJc0pUSXlZMjl1ZEdWNGRFNWhiV1VsTWpJNkpUSXlKVEl5SlRkRSUyMiwlMjJ2YWx1ZSUyMjolN0IlMjJvcHRpb25fbmFtZSUyMjolMjJiZXN0X2xvc3MlMjIsJTIyY29udGV4dCUyMjpudWxsJTdEJTdELCU3QiUyMmxhYmVsJTIyOiUyMmJsZXUlMjIsJTIyZ3JvdXAlMjI6JTIyYmxldSUyMiwlMjJ0eXBlJTIyOiUyMm1ldHJpY3MlMjIsJTIyY29sb3IlMjI6JTIyIzNFNzJFNyUyMiwlMjJrZXklMjI6JTIyTy1KVGRDSlRJeWJXVjBjbWxqVG1GdFpTVXlNam9sTWpKaWJHVjFKVEl5TENVeU1tTnZiblJsZUhST1lXMWxKVEl5T2lVeU1pVXlNaVUzUkElMjIsJTIydmFsdWUlMjI6JTdCJTIyb3B0aW9uX25hbWUlMjI6JTIyYmxldSUyMiwlMjJjb250ZXh0JTIyOm51bGwlN0QlN0QlNUQsJTIycXVlcnklMjI6JTIycnVuLmhwYXJhbXMubGVhcm5pbmdfcmF0ZSUyMCUzRSUyMDAuMDAwMDElMjIsJTIyYWR2YW5jZWRNb2RlJTIyOmZhbHNlLCUyMmFkdmFuY2VkUXVlcnklMjI6JTIycnVuLmhwYXJhbXMubGVhcm5pbmdfcmF0ZSUyMCUzRSUyMDAuMDAwMDElMjBhbmQlMjAoKG1ldHJpYy5uYW1lJTIwPT0lMjAlNUMlMjJibGV1JTVDJTIyKSUyMG9yJTIwKG1ldHJpYy5uYW1lJTIwPT0lMjAlNUMlMjJiZXN0X2xvc3MlNUMlMjIpJTIwb3IlMjAobWV0cmljLm5hbWUlMjA9PSUyMCU1QyUyMmJzeiU1QyUyMiUyMGFuZCUyMG1ldHJpYy5jb250ZXh0LnN1YnNldCUyMD09JTIwJTVDJTIydHJhaW4lNUMlMjIpKSUyMiU3RA',
    imgSrc: MachineTranslation,
  },
  {
    name: 'lightweight-gan',
    title: 'lightweight-GAN',
    description: "Training logs of 'lightweight' GAN, proposed in ICLR 2021.",
    url: 'https://play.aimstack.io/image-generation/images?grouping=O-JTdCJTIycm93JTIyOiU1QiU1RCwlMjJyZXZlcnNlTW9kZSUyMjolN0IlMjJyb3clMjI6ZmFsc2UsJTIyZ3JvdXAlMjI6ZmFsc2UlN0QsJTIyaXNBcHBsaWVkJTIyOiU3QiUyMnJvdyUyMjp0cnVlLCUyMmdyb3VwJTIyOnRydWUlN0QsJTIyZ3JvdXAlMjI6JTVCJTIyaW5kZXglMjIsJTIyc3RlcCUyMiU1RCU3RA&select=O-JTdCJTIyb3B0aW9ucyUyMjolNUIlN0IlMjJsYWJlbCUyMjolMjJnZW5lcmF0ZWQlMjIsJTIyZ3JvdXAlMjI6JTIyZ2VuZXJhdGVkJTIyLCUyMmNvbG9yJTIyOiUyMiMzRTcyRTclMjIsJTIya2V5JTIyOiUyMk8tSlRkQ0pUSXliV1YwY21salRtRnRaU1V5TWpvbE1qSm5aVzVsY21GMFpXUWxNaklzSlRJeVkyOXVkR1Y0ZEU1aGJXVWxNakk2SlRJeUpUSXlKVGRFJTIyLCUyMnZhbHVlJTIyOiU3QiUyMm9wdGlvbl9uYW1lJTIyOiUyMmdlbmVyYXRlZCUyMiwlMjJjb250ZXh0JTIyOm51bGwlN0QlN0QlNUQsJTIycXVlcnklMjI6JTIyaW1hZ2VzLmNvbnRleHQuaW50ZXJwb2xhdGVkJTIwYW5kJTIwcnVuLmhwYXJhbXMubmFtZSUyMD09JTIwJTVDJTIybWV0ZmFjZXMlNUMlMjIlMjIsJTIyYWR2YW5jZWRNb2RlJTIyOmZhbHNlLCUyMmFkdmFuY2VkUXVlcnklMjI6JTIyaW1hZ2VzLmNvbnRleHQuaW50ZXJwb2xhdGVkJTIwYW5kJTIwcnVuLmhwYXJhbXMubmFtZSUyMD09JTIwJTVDJTIybWV0ZmFjZXMlNUMlMjIlMjIlN0Q&images=O-JTdCJTIyaW5kZXhEZW5zaXR5JTIyOjcsJTIycmVjb3JkRGVuc2l0eSUyMjoxNSwlMjJ0b29sdGlwJTIyOiU3QiUyMmFwcGVhcmFuY2UlMjI6JTIyYXV0byUyMiwlMjJkaXNwbGF5JTIyOnRydWUsJTIyc2VsZWN0ZWRGaWVsZHMlMjI6JTVCJTVELCUyMnNlbGVjdGVkUGFyYW1zJTIyOiU1QiU1RCU3RCwlMjJhZGRpdGlvbmFsUHJvcGVydGllcyUyMjolN0IlMjJhbGlnbm1lbnRUeXBlJTIyOiUyMkhlaWdodCUyMiwlMjJtZWRpYUl0ZW1TaXplJTIyOjIzLCUyMmltYWdlUmVuZGVyaW5nJTIyOiUyMnBpeGVsYXRlZCUyMiwlMjJzdGFja2luZyUyMjpmYWxzZSU3RCwlMjJmb2N1c2VkU3RhdGUlMjI6JTdCJTIyYWN0aXZlJTIyOmZhbHNlLCUyMmtleSUyMjpudWxsJTdELCUyMnNvcnRGaWVsZHMlMjI6JTVCJTVELCUyMnNvcnRGaWVsZHNEaWN0JTIyOiU3QiU3RCwlMjJpbnB1dHNWYWxpZGF0aW9ucyUyMjolN0IlMjJpbmRleERlbnNpdHklMjI6dHJ1ZSwlMjJyZWNvcmREZW5zaXR5JTIyOnRydWUlN0QsJTIyY2FsY1JhbmdlcyUyMjpmYWxzZSwlMjJzdGVwUmFuZ2UlMjI6JTVCMSw0Njk1NiU1RCwlMjJpbmRleFJhbmdlJTIyOiU1QjAsNyU1RCwlMjJyZWNvcmRTbGljZSUyMjolNUIzMTE0Miw0Njk1NyU1RCwlMjJpbmRleFNsaWNlJTIyOiU1QjAsOCU1RCwlMjJpbWFnZVByb3BlcnRpZXMlMjI6JTdCJTIyYWxpZ25tZW50VHlwZSUyMjolMjJIZWlnaHQlMjIsJTIyaW1hZ2VTaXplJTIyOjI1LCUyMmltYWdlUmVuZGVyaW5nJTIyOiUyMnBpeGVsYXRlZCUyMiU3RCU3RA',
    imgSrc: LightweightGan,
  },
  {
    name: 'fastSpeech',
    title: 'FastSpeech 2',
    description:
      'Training logs of Microsoft\'s "FastSpeech 2: Fast and High-Quality End-to-End Text to Speech".',
    url: 'https://play.aimstack.io/fastspeech2/runs/d9e89aa7875e44b2ba85612a/audios',
    imgSrc: FastSpeech,
  },
  {
    name: 'simple-mnist',
    title: 'Simple MNIST',
    description: 'Simple MNIST training logs.',
    url: 'https://play.aimstack.io/digit-recognition/runs/426032ad2d7e4b0385bc6c51/distributions',
    imgSrc: SimpleMnist,
  },
];

export default demosList;
