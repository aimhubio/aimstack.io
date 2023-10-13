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
    url: 'http://play.aimstack.io:10001/metrics?grouping=O-eyJjb2xvciI6WyJydW4ucGFyYW1zLmhwYXJhbXMubWF4X2siXSwic3Ryb2tlIjpbXSwiY2hhcnQiOlsibmFtZSIsImNvbnRleHQuc3Vic2V0Il0sInJldmVyc2VNb2RlIjp7ImNvbG9yIjpmYWxzZSwic3Ryb2tlIjpmYWxzZSwiY2hhcnQiOmZhbHNlfSwiaXNBcHBsaWVkIjp7ImNvbG9yIjp0cnVlLCJzdHJva2UiOnRydWUsImNoYXJ0Ijp0cnVlfSwicGVyc2lzdGVuY2UiOnsiY29sb3IiOmZhbHNlLCJzdHJva2UiOmZhbHNlfSwic2VlZCI6eyJjb2xvciI6MTAsInN0cm9rZSI6MTB9LCJwYWxldHRlSW5kZXgiOjB9&chart=O-eyJoaWdobGlnaHRNb2RlIjoyLCJpZ25vcmVPdXRsaWVycyI6dHJ1ZSwiem9vbSI6eyJhY3RpdmUiOmZhbHNlLCJtb2RlIjowLCJoaXN0b3J5IjpbXX0sImF4ZXNTY2FsZVR5cGUiOnsieEF4aXMiOiJsaW5lYXIiLCJ5QXhpcyI6ImxpbmVhciJ9LCJheGVzU2NhbGVSYW5nZSI6eyJ5QXhpcyI6e30sInhBeGlzIjp7fX0sInNtb290aGluZyI6eyJhbGdvcml0aG0iOiJFWFBPTkVOVElBTF9NT1ZJTkdfQVZFUkFHRSIsImZhY3RvciI6MCwiY3VydmVJbnRlcnBvbGF0aW9uIjoiY3VydmVMaW5lYXIiLCJpc0FwcGxpZWQiOmZhbHNlfSwiYWxpZ25tZW50Q29uZmlnIjp7Im1ldHJpYyI6IiIsInR5cGUiOiJzdGVwIn0sImRlbnNpdHlUeXBlIjo1MDAsImFnZ3JlZ2F0aW9uQ29uZmlnIjp7Im1ldGhvZHMiOnsiYXJlYSI6MSwibGluZSI6MH0sImlzQXBwbGllZCI6dHJ1ZSwiaXNFbmFibGVkIjp0cnVlfSwidG9vbHRpcCI6eyJhcHBlYXJhbmNlIjoiYXV0byIsImRpc3BsYXkiOnRydWUsInNlbGVjdGVkRmllbGRzIjpbXSwiY29udGVudCI6eyJydW5IYXNoIjoiZGEzZDFlNyIsIm5hbWUiOiJiZXN0X2xvc3MiLCJjb250ZXh0Ijp7InN1YnNldCI6InZhbCJ9LCJtZWRpYUNvbnRlbnQiOnt9LCJncm91cENvbmZpZyI6eyJjb2xvciI6eyJydW4uaHBhcmFtcy5tYXhfayI6MSwicnVuLmRhdGFzZXQucHJlcHJvYyI6IlhMTS1zeW50b2stZ3JlZWR5LWZldy1hdmcifSwiY2hhcnQiOnsibWV0cmljLm5hbWUiOiJiZXN0X2xvc3MiLCJtZXRyaWMuY29udGV4dC5zdWJzZXQiOiJ2YWwifX0sInBhcmFtcyI6e319LCJzZWxlY3RlZFBhcmFtcyI6W119LCJmb2N1c2VkU3RhdGUiOnsia2V5IjoiVDk4cHhKODNhcVJ1TjdNQzlRNEp2ZGtqS01vR0J4Q3lvZEVNRGhNVkVBNjhlVTVrb2V5QzdaVWVLd0M2aGg4Qzc4RDd5SGd6OENXd0VZVW5HZGNrWGJEYUxuMnI5NjF6ZmoyOTdBaG5Nb2tnZG9OUiIsInhWYWx1ZSI6MjEsInlWYWx1ZSI6My40NzM5OTk5NzcxLCJhY3RpdmUiOnRydWUsImNoYXJ0SW5kZXgiOjB9fQ&select=O-eyJvcHRpb25zIjpbeyJsYWJlbCI6ImJlc3RfbG9zcyIsImdyb3VwIjoiYmVzdF9sb3NzIiwiY29sb3IiOiIjMDM5NEI0IiwidmFsdWUiOnsib3B0aW9uX25hbWUiOiJiZXN0X2xvc3MiLCJjb250ZXh0IjpudWxsfSwia2V5IjoiTy1leUp0WlhSeWFXTk9ZVzFsSWpvaVltVnpkRjlzYjNOeklpd2lZMjl1ZEdWNGRFNWhiV1VpT2lJaWZRIn0seyJsYWJlbCI6ImJsZXUiLCJncm91cCI6ImJsZXUiLCJjb2xvciI6IiNFODg1M0QiLCJ2YWx1ZSI6eyJvcHRpb25fbmFtZSI6ImJsZXUiLCJjb250ZXh0IjpudWxsfSwia2V5IjoiTy1leUp0WlhSeWFXTk9ZVzFsSWpvaVlteGxkU0lzSW1OdmJuUmxlSFJPWVcxbElqb2lJbjAifV0sInF1ZXJ5IjoicnVuLmhwYXJhbXMubGVhcm5pbmdfcmF0ZSA-IDAuMDAwMDEiLCJhZHZhbmNlZE1vZGUiOmZhbHNlLCJhZHZhbmNlZFF1ZXJ5IjoicnVuLmhwYXJhbXMubGVhcm5pbmdfcmF0ZSA-IDAuMDAwMDEgYW5kICgobWV0cmljLm5hbWUgPT0gXCJibGV1XCIpIG9yIChtZXRyaWMubmFtZSA9PSBcImJlc3RfbG9zc1wiKSBvciAobWV0cmljLm5hbWUgPT0gXCJic3pcIiBhbmQgbWV0cmljLmNvbnRleHQuc3Vic2V0ID09IFwidHJhaW5cIikpIn0',
    imgSrc: MachineTranslation,
  },
  {
    name: 'lightweight-gan',
    title: 'lightweight-GAN',
    description: "Tranining logs of 'lightweight' GAN, proposed in ICLR 2021.",
    url: 'http://play.aimstack.io:10002/images?grouping=O-eyJyb3ciOltdLCJyZXZlcnNlTW9kZSI6eyJyb3ciOmZhbHNlLCJncm91cCI6ZmFsc2V9LCJpc0FwcGxpZWQiOnsicm93Ijp0cnVlLCJncm91cCI6dHJ1ZX0sImdyb3VwIjpbImluZGV4Iiwic3RlcCJdfQ&select=O-eyJvcHRpb25zIjpbeyJsYWJlbCI6ImdlbmVyYXRlZCIsImdyb3VwIjoiZ2VuZXJhdGVkIiwiY29sb3IiOiIjM0U3MkU3IiwidmFsdWUiOnsib3B0aW9uX25hbWUiOiJnZW5lcmF0ZWQiLCJjb250ZXh0IjpudWxsfSwia2V5IjoiTy1leUp0WlhSeWFXTk9ZVzFsSWpvaVoyVnVaWEpoZEdWa0lpd2lZMjl1ZEdWNGRFNWhiV1VpT2lJaWZRIn1dLCJxdWVyeSI6ImltYWdlcy5jb250ZXh0LmludGVycG9sYXRlZCBhbmQgcnVuLmhwYXJhbXMubmFtZSA9PSBcIm1ldGZhY2VzXCIiLCJhZHZhbmNlZE1vZGUiOmZhbHNlLCJhZHZhbmNlZFF1ZXJ5IjoiaW1hZ2VzLmNvbnRleHQuaW50ZXJwb2xhdGVkIGFuZCBydW4uaHBhcmFtcy5uYW1lID09IFwibWV0ZmFjZXNcIiJ9&images=O-eyJpbmRleERlbnNpdHkiOjgsInJlY29yZERlbnNpdHkiOiIxNSIsInRvb2x0aXAiOnsiYXBwZWFyYW5jZSI6ImF1dG8iLCJkaXNwbGF5Ijp0cnVlLCJzZWxlY3RlZEZpZWxkcyI6W10sImNvbnRlbnQiOnsiY2FwdGlvbiI6IiM3IiwiZm9ybWF0IjoicG5nIiwid2lkdGgiOjUxMiwiaGVpZ2h0Ijo1MTIsImJsb2JfdXJpIjoiZ0FBQUFBQmlEUkNRZ05ZN3NEelhlR0NVd21kNkFmSkV5eEwwbUFucUQ2bEFRVjZhaTN5ZGdJOEFjZ2xiaE83ZGZKWWppdXBsay1OaUlNVWxmZTBVSF9jODdaX19lR0JoRXh0QkxHS0FNWnRZSWxOa1VLb1NjWkRvdS1Hcml5ell5N2QyYzloN2hqZVBtWTd3azVHM3ItZkJIX3h0eUFpU29GU0Mwa2h0T00wdXNONDNpQWt1OGFTYW95dWJtaHZqZTA3bmFtdG1CSmJqX1FPWkgxRUxCVEF4YUtjRUg2U0hEZVp0NW4zWWxlWEZZUGNfejllZW1JOFdWMktZMzZnWXdScFhsZmt3YTdGTHgzUWVrVHh2b0NmdGZlTGZIcnhZQmx0MHlIN3phaDItVTdrZWtubFZWWGp6Nkwwa3AyNlZPc1dsQnd2U2JoR2lSNUxnZXV3ZGlJVVpWQTFvTVBmOEJ3PT0iLCJpbmRleCI6MCwiaW1hZ2VzX25hbWUiOiJnZW5lcmF0ZWQiLCJzdGVwIjozOTEzMCwiY29udGV4dCI6eyJhbHBoYSI6MSwiaW50ZXJwb2xhdGVkIjoxfSwicnVuIjp7InJhbmdlcyI6eyJyZWNvcmRfcmFuZ2UiOlszMTE0Miw0Njk1OF0sImluZGV4X3JhbmdlIjpbMCw5XSwicmVjb3JkX3NsaWNlIjpbMzExNDIsNDY5NTgsMTA1NF0sImluZGV4X3NsaWNlIjpbMCw5LDFdfSwicGFyYW1zIjp7ImhwYXJhbXMiOnsiYW1wIjowLCJhbnRpYWxpYXMiOjAsImF0dG5fcmVzX2xheWVycyI6WzMyXSwiYXVnX3Byb2IiOm51bGwsImF1Z190eXBlcyI6WyJjdXRvdXQiLCJ0cmFuc2xhdGlvbiJdLCJiYXRjaF9zaXplIjoxMCwiY2FsY3VsYXRlX2ZpZF9ldmVyeSI6bnVsbCwiY2FsY3VsYXRlX2ZpZF9udW1faW1hZ2VzIjoxMjgwMCwiY2xlYXJfZmlkX2NhY2hlIjowLCJkYXRhc2V0X2F1Z19wcm9iIjowLCJkaXNjX291dHB1dF9zaXplIjoxLCJkdWFsX2NvbnRyYXN0X2xvc3MiOjAsImV2YWx1YXRlX2V2ZXJ5IjoxMDAwLCJmbWFwX21heCI6NTEyLCJmcmVxX2NoYW5fYXR0biI6MCwiZ3JhZGllbnRfYWNjdW11bGF0ZV9ldmVyeSI6NCwiZ3JleXNjYWxlIjowLCJpbWFnZV9zaXplIjo1MTIsImlzX2RkcCI6MCwibHIiOjAuMDAwMiwibW9kZWxzX2RpciI6Ii4vbW9kZWxzIiwibmFtZSI6Im1ldGZhY2VzIiwibnVtX2ltYWdlX3RpbGVzIjo4LCJudW1fd29ya2VycyI6bnVsbCwib3B0aW1pemVyIjoiYWRhbSIsInJhbmsiOjAsInJlc3VsdHNfZGlyIjoiLi9yZXN1bHRzIiwic2F2ZV9ldmVyeSI6MTAwMCwidHJhbnNwYXJlbnQiOjAsIndvcmxkX3NpemUiOjF9fSwicHJvcHMiOnsibmFtZSI6IlJ1bjogMTc2NmNjZjYwZDdhNDMyNmEwZWI5YjYwIiwiZXhwZXJpbWVudCI6eyJpZCI6ImI4ZGQ4NGQzLWM2ZTYtNGU2OC05YmE1LWU3MDRhYzUzODgyOSIsIm5hbWUiOiJkZWZhdWx0In0sInRhZ3MiOlt7ImlkIjoiODg1Mzg5YzEtNmVkZC00Y2Q2LWEzNDEtNmYxNjQ5NGI2NTBkIiwibmFtZSI6IkNvbW1lbnQiLCJjb2xvciI6IiMzRTcyRTciLCJkZXNjcmlwdGlvbiI6IiJ9XSwiYXJjaGl2ZWQiOmZhbHNlLCJjcmVhdGlvbl90aW1lIjoxNjM3NDQ2Mzg5LjY3OTcyNywiZW5kX3RpbWUiOjE2Mzc4MzQ1OTYuNTI3MDI4fSwiaGFzaCI6IjE3NjZjY2Y2MGQ3YTQzMjZhMGViOWI2MCJ9LCJrZXkiOiIyWkZEcFV6aTEzUnRaRHNOdEM2bVVmamJ3UU5ITm1pWHY4UkN6OVNYS3ExelhpNVJGOTJhRFhHMzh3S1dxS3hrcnRpdkhuWFRCbVNVRnh4eWc0a0NMa3NMQW9TRDJuRzFxejJpS1QxMjlieHlTQlNCUWhFRG56M3p1RktaeFhRODdyTW1nWEJaS1VMUUtYUHFFZjlTZzVSa3g5VE5zVVBacXkyRWF3azFmNDdyWTRBWFZNQ0xEdGJaeTV1ZzZnS05mUkV0Iiwic2VxS2V5IjoiM1BEYVlVSG12N2h2MVMzSldLZG95RTh6RjZuTHF6Wk5BV0JnNDdUTUxwVmkzeDE0WFoxNEJwSkVXaHJ3NHhCVTNaV2RhcHF3R001eFJ1VVU3U2hGVHBvV0d0YlZETHIxdERzUGttOUpKQmFmMjRRcTd2c3k2anJuczZlcEFHVnJaRU5DUFhOYVR5M0ZTMzNxIiwiZ3JvdXBDb25maWciOnsiZ3JvdXAiOnsicmVjb3JkLmluZGV4IjowLCJyZWNvcmQuc3RlcCI6MzkxMzB9fSwicGFyYW1zIjp7fX0sInNlbGVjdGVkUGFyYW1zIjpbXX0sImFkZGl0aW9uYWxQcm9wZXJ0aWVzIjp7ImFsaWdubWVudFR5cGUiOiJIZWlnaHQiLCJtZWRpYUl0ZW1TaXplIjoyMywiaW1hZ2VSZW5kZXJpbmciOiJwaXhlbGF0ZWQiLCJzdGFja2luZyI6ZmFsc2V9LCJmb2N1c2VkU3RhdGUiOnsiYWN0aXZlIjpmYWxzZSwia2V5IjpudWxsfSwic29ydEZpZWxkcyI6W10sInNvcnRGaWVsZHNEaWN0Ijp7fSwiaW5wdXRzVmFsaWRhdGlvbnMiOnsiaW5kZXhEZW5zaXR5Ijp0cnVlfSwiY2FsY1JhbmdlcyI6ZmFsc2UsInN0ZXBSYW5nZSI6WzEsNDY5NTddLCJpbmRleFJhbmdlIjpbMCw4XSwicmVjb3JkU2xpY2UiOlszMTE0Miw0Njk1N10sImluZGV4U2xpY2UiOlswLDhdLCJpbWFnZVByb3BlcnRpZXMiOnsiYWxpZ25tZW50VHlwZSI6IkhlaWdodCIsImltYWdlU2l6ZSI6MjUsImltYWdlUmVuZGVyaW5nIjoicGl4ZWxhdGVkIn19',
    imgSrc: LightweightGan,
  },
  {
    name: 'fastSpeech',
    title: 'FastSpeech 2',
    description:
      'Training logs of Microsoft\'s "FastSpeech 2: Fast and High-Quality End-to-End Text to Speech".',
    url: 'http://play.aimstack.io:10004/runs/d9e89aa7875e44b2ba85612a/audios',
    imgSrc: FastSpeech,
  },
  {
    name: 'simple-mnist',
    title: 'Simple MNIST',
    description: 'Simple MNIST training logs.',
    url: 'http://play.aimstack.io:10003/runs/7f083da898624a2c98e0f363/distributions',
    imgSrc: SimpleMnist,
  },
];

export default demosList;
