'use client'
import { ModeToggle } from '../components/toggle'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { useState,useEffect, useRef, SetStateAction } from 'react';
import LogoDark from '../imgs/logodark.png'
import LogoLight from '../imgs/logolight.png'
import { useTheme } from 'next-themes';
import MonacoEditor, { EditorProps } from '@monaco-editor/react';
export default function Home() {
 const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[NOME DO EMAIL]</title>
  <style>
    /* Reset styles */
    body,
    #bodyTable,
    #bodyCell {
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    /* Set text color */
    body,
    #bodyTable,
    #bodyCell,
    p,
    td {
      color: #404040;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }

    /* Set link color */
    a {
      color: #FFB300;
      text-decoration: none;
    }

    /* Set mobile styles */
    /* Target mobile devices with a screen width of 480px or less */
    @media only screen and (max-width: 480px) {

      /* Set table width to 100% */
      table {
        width: 100% !important;
        min-width: 100%;
      }

      /* Set image max width to 100% and height to auto */
      img {
        max-width: 100% !important;
        height: auto !important;
      }

      /* Increase padding for table cells */

    }

    /* Preheader */
    .preheader {
      display: none;
      visibility: hidden;
      color: transparent;
      height: 0;
      width: 0;
    }
  </style>
</head>

<body>
  <!-- PRE-HEADER TEXT -->
  <span class="preheader"></span>
  <center>
    <table border="0" cellpadding="0" cellspacing="0" id="bodyTable" bgcolor="#f7f7f7">
      <tr>
        <td align="center" id="bodyCell" valign="top">
          <table border="0" cellpadding="0" cellspacing="0" class="container" width="480">
            <!--Header-->
            <tr>
              <td>
                
                <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 480px; min-width: 100%;background:[DEFINA A COR OU IMAGEM DO HEADER] ; text-align: center;">
                    <tr>
                        <td align="center" style="position: relative;">
                            <div style="position: relative; width: 100%; max-width: 480px;">
                                <div style="position: relative;background: [DEFINA SE TERÁ COR OU SERÁ A MESMA DO ACIMA];z-index: 2;">
                                    <img src="[LOGO DO EMAIL]" alt="UEMP" style="width: 186px; height: auto; margin: 18px auto;">
                                </div>
                                
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
                
                                <div style="padding: 20px; z-index: 2; position: relative;">
                                  <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 4;">
                                      <h4 style="color: #e3e3e3; font-size: 24px; font-weight: 500;">[Olá [Nome],]</h4>
                                  </div>
                                  <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 380px; margin: 20px auto; line-height: 1.4; ">
                                      [TEXTO ABAIXO DO OLÁ NOME]
                                  </p>
                                  <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 350px; margin: 20px auto; line-height: 1.4; ">
                                      [TEXTO CONTINUAÇÃO]
                                  </p>
                              </div>
                                <img src="[IMAGEM RODAPÉ DO HEADER]" alt="" style="width: 567px;height: 389px; z-index: 2;  position: relative; right: 60px;top: 7px;">
                            </div>
                               
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                
                
              </td>
            </tr>
            <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="40" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 70px; padding-bottom: 20px; " bgcolor="F5F5F5">
                     <img src="[ICON DE INFORMAÇÃO]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;
                     ">
                      <p
                        style="font-size:30px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">
                        <strong>[TITLE DO EMAIL]</strong> 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        [TEXTO EMBAIXO DO TITLE] 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">[TEXTO]
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="80" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <img src="[ICON DO COMPONENTE]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;">
                      <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO COMPONENTE]</strong>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!--img-->
            <tr>
                <td>
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-top:10px; max-width: 480px;min-width:100%;">
                    <tr>
                      <td align="center" bgcolor="#F5F5F5">
                       <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO BUTTON]</strong>
                      </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 41.5px;
                            background:[MUDE A COR DO BUTTON];"align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
               
            
            
            <!-- Msg -->
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <div style="display: flex;align-items: center;justify-content: center; 
                        gap: 20px; ">
                            <img src="[ICON]" alt="" style="width: 75px;height: 75px;top: 2341px;left: 88px;gap: 0px;
                            opacity: 0px;
                            ">
                            <p
                          style="font-size:32px;font-family: Arial ;color:#07013D;font-weight: 800;line-height:32.76px;margin: 0px;text-align:center; max-width: 290px;">
                          [TITLE AO LADO DO ICON]

                        </p>
                        </div>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 54px;
                            background:#000000;"
                            align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais e inscreva-se</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px; max-width: 300px;">[AGRADECIMENTOS]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- Rodapé -->
            <tr>
              <td>
                <table cellspacing="20" cellpadding="0" border="0" width="100%" bgcolor="[MUDE APENAS A COR DO RODAPÉ]"
                  style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top:0px; padding-bottom:0px ">
                      <p style="font-size:11px;color:#f7f7f7;font-weight:normal;line-height:1.5;margin:0;">
                        <strong>Você está recebendo e-mails de BNE - Banco Nacional de Empregos</strong><br>
                        Este e-mail foi enviado para {nome} ({email})<br>
                        Caso não queira mais receber nossos emails, clique no link:
                        <a href="https://www.bne.com.br/inativar-curriculo" style="text-decoration:underline;color: #FFB300;">cancelar inscrição</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>

</html>

  `);
    const EstruturaHeader = `
    <table border="0" cellpadding="0" cellspacing="0" id="bodyTable" bgcolor="#f7f7f7">
      <tr>
        <td align="center" id="bodyCell" valign="top">
          <table border="0" cellpadding="0" cellspacing="0" class="container" width="480">
            <!--Header-->
            <tr>
              <td>
                <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 480px; min-width: 100%;background:[DEFINA A COR OU IMAGEM DO HEADER] ; text-align: center;">
                  <tr>
                    <td align="center" style="position: relative;">
                      <div style="position: relative; width: 100%; max-width: 480px;">
                        <div style="position: relative;background: [DEFINA SE TERÁ COR OU SERÁ A MESMA DO ACIMA];z-index: 2;">
                          <img src="[LOGO DO EMAIL]" alt="UEMP" style="width: 186px; height: auto; margin: 18px auto;">
                        </div>
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
                        <div style="padding: 20px; z-index: 2; position: relative;">
                          <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 4;">
                            <h4 style="color: #e3e3e3; font-size: 24px; font-weight: 500;">[Olá [Nome],]</h4>
                          </div>
                          <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 380px; margin: 20px auto; line-height: 1.4;">
                            [TEXTO ABAIXO DO OLÁ NOME]
                          </p>
                          <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 350px; margin: 20px auto; line-height: 1.4;">
                            [TEXTO CONTINUAÇÃO]
                          </p>
                        </div>
                        <img src="[IMAGEM RODAPÉ DO HEADER]" alt="" style="width: 567px;height: 389px; z-index: 2;  position: relative; right: 60px;top: 7px;">
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
  
  const EstruturaDescHeader = `
       <div style="position: relative;background: [DEFINA SE TERÁ COR OU SERÁ A MESMA DO ACIMA];z-index: 2;">
        <img src="[LOGO DO EMAIL]" alt="UEMP" style="width: 186px; height: auto; margin: 18px auto;">
      </div>
       <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
          <div style="padding: 20px; z-index: 2; position: relative;">
           <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 4;">
              <h4 style="color: #e3e3e3; font-size: 24px; font-weight: 500;">[Olá [Nome],]</h4>
           </div>
             <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 380px; margin: 20px auto; line-height: 1.4;">
               [TEXTO ABAIXO DO OLÁ NOME]
            </p>
             <p style="color: #FFF; font-size: 20px; font-weight: 400; max-width: 350px; margin: 20px auto; line-height: 1.4;">
               [TEXTO CONTINUAÇÃO]
            </p>
          </div> 
            <img src="[IMAGEM RODAPÉ DO HEADER]" alt="" style="width: 567px;height: 389px; z-index: 2;  position: relative; right: 60px;top: 7px;">
         </div>
  `;
  const EstruturaMainCorte = `
        <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="40" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 70px; padding-bottom: 20px; " bgcolor="F5F5F5">
                     <img src="[ICON DE INFORMAÇÃO]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;
                     ">
                      <p
                        style="font-size:30px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">
                        <strong>[TITLE DO EMAIL]</strong> 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        [TEXTO EMBAIXO DO TITLE] 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">[TEXTO]
                      </p>
                    </td>
                  </tr>
                </table>
  `;
  const EstruturaMain = `
        <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="40" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 70px; padding-bottom: 20px; " bgcolor="F5F5F5">
                     <img src="[ICON DE INFORMAÇÃO]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;
                     ">
                      <p
                        style="font-size:30px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">
                        <strong>[TITLE DO EMAIL]</strong> 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        [TEXTO EMBAIXO DO TITLE] 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">[TEXTO]
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="80" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <img src="[ICON DO COMPONENTE]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;">
                      <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO COMPONENTE]</strong>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!--img-->
            <tr>
                <td>
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-top:10px; max-width: 480px;min-width:100%;">
                    <tr>
                      <td align="center" bgcolor="#F5F5F5">
                       <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO BUTTON]</strong>
                      </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 41.5px;
                            background:[MUDE A COR DO BUTTON];"align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  `;
  const EstruturaMaindesc = `
          <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="40" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 70px; padding-bottom: 20px; " bgcolor="F5F5F5">
                     <img src="[ICON DE INFORMAÇÃO]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;
                     ">
                      <p
                        style="font-size:30px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">
                        <strong>[TITLE DO EMAIL]</strong> 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        [TEXTO EMBAIXO DO TITLE] 
                      </p>
                      <p
                        style="font-size:20px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 25px;">[TEXTO]
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  `;
  const EstruturaMainicon = `
  <!-- Msg -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="80" border="0" width="100%" style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <img src="[ICON DO COMPONENTE]" alt="" style="width: 64px; height: 64px;top: 833px;left: 206px;gap: 0px;
                     opacity: 0px;">
                      <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO COMPONENTE]</strong>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
`;
const EstruturaMainbutton = `
  <!--img-->
            <tr>
                <td>
                  <table width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-top:10px; max-width: 480px;min-width:100%;">
                    <tr>
                      <td align="center" bgcolor="#F5F5F5">
                       <p
                        style="font-size:22px;font-family: Arial Black;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px;">
                        <strong>[TITLE DO BUTTON]</strong>
                      </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 41.5px;
                            background:[MUDE A COR DO BUTTON];"align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
`;
const EstruturaRodape = `
  <!-- Msg -->
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <div style="display: flex;align-items: center;justify-content: center; 
                        gap: 20px; ">
                            <img src="[ICON]" alt="" style="width: 75px;height: 75px;top: 2341px;left: 88px;gap: 0px;
                            opacity: 0px;
                            ">
                            <p
                          style="font-size:32px;font-family: Arial ;color:#07013D;font-weight: 800;line-height:32.76px;margin: 0px;text-align:center; max-width: 290px;">
                          [TITLE AO LADO DO ICON]

                        </p>
                        </div>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 54px;
                            background:#000000;"
                            align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais e inscreva-se</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px; max-width: 300px;">[AGRADECIMENTOS]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            <!-- Rodapé -->
            <tr>
              <td>
                <table cellspacing="20" cellpadding="0" border="0" width="100%" bgcolor="[MUDE APENAS A COR DO RODAPÉ]"
                  style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top:0px; padding-bottom:0px ">
                      <p style="font-size:11px;color:#f7f7f7;font-weight:normal;line-height:1.5;margin:0;">
                        <strong>Você está recebendo e-mails de BNE - Banco Nacional de Empregos</strong><br>
                        Este e-mail foi enviado para {nome} ({email})<br>
                        Caso não queira mais receber nossos emails, clique no link:
                        <a href="https://www.bne.com.br/inativar-curriculo" style="text-decoration:underline;color: #FFB300;">cancelar inscrição</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
`;
const EstruturaRodapeCorte = `
  <!-- Msg -->
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <div style="display: flex;align-items: center;justify-content: center; 
                        gap: 20px; ">
                            <img src="[ICON]" alt="" style="width: 75px;height: 75px;top: 2341px;left: 88px;gap: 0px;
                            opacity: 0px;
                            ">
                            <p
                          style="font-size:32px;font-family: Arial ;color:#07013D;font-weight: 800;line-height:32.76px;margin: 0px;text-align:center; max-width: 290px;">
                          [TITLE AO LADO DO ICON]

                        </p>
                        </div>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
           
`;
const EstruturaRodapedesc = `
          <!-- Msg -->
            <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <div style="display: flex;align-items: center;justify-content: center; 
                        gap: 20px; ">
                            <img src="[ICON]" alt="" style="width: 75px;height: 75px;top: 2341px;left: 88px;gap: 0px;
                            opacity: 0px;
                            ">
                            <p
                          style="font-size:32px;font-family: Arial ;color:#07013D;font-weight: 800;line-height:32.76px;margin: 0px;text-align:center; max-width: 290px;">
                          [TITLE AO LADO DO ICON]

                        </p>
                        </div>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 60px; max-width: 370px;">[TEXTO]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
`;
const EstruturaRodapebutton = `
<!-- call to action -->
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="F5F5F5"
                  style="max-width:480px;min-width:100%; padding-bottom: 30px;">
                  <tr>
                    <td align="center" style="padding-top:20px;padding-bottom: 20px;">
                      <table cellspacing="0" cellpadding="0" border="0" width="90%"
                        style="padding-top:0px;padding-bottom:0px;max-width: 400px;">
                        <tr>
                          <td
                            style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius: 54px;
                            background:#000000;"
                            align="center">
                            <p style="margin:4px;"><a href="[LINK BUTTON]"
                                style="font-family: Arial;font-size:24px;color: #FFFFFF;line-height:100%;text-decoration:none;"><strong><p><u>Saiba mais e inscreva-se</u></p></strong></a></p>   
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
`;
const EstruturaRodapeagradecimentos = `
              <tr>
                <td>
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 480px;padding-bottom: 30px;">
                    <tr>
                      <td align="center" style="padding-top: 0px; padding-bottom: 20px;" bgcolor="F5F5F5">
                        <p style="font-size:22px;font-family: Arial;color:#000000;font-weight:400;line-height:30px;margin: 0px;text-align:center;margin-top: 14px; max-width: 300px;">[AGRADECIMENTOS]</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
`;
const EstruturadoRodape = `
    <!-- Rodapé -->
            <tr>
              <td>
                <table cellspacing="20" cellpadding="0" border="0" width="100%" bgcolor="[MUDE APENAS A COR DO RODAPÉ]"
                  style="max-width: 480px;">
                  <tr>
                    <td align="center" style="padding-top:0px; padding-bottom:0px ">
                      <p style="font-size:11px;color:#f7f7f7;font-weight:normal;line-height:1.5;margin:0;">
                        <strong>Você está recebendo e-mails de BNE - Banco Nacional de Empregos</strong><br>
                        Este e-mail foi enviado para {nome} ({email})<br>
                        Caso não queira mais receber nossos emails, clique no link:
                        <a href="https://www.bne.com.br/inativar-curriculo" style="text-decoration:underline;color: #FFB300;">cancelar inscrição</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
`;
    const editorRef = useRef(null);
    const { theme } = useTheme();
    const [editorTheme, setEditorTheme] = useState("vs-light");
    
    useEffect(() => {
      if (theme === "dark") {
        setEditorTheme("vs-dark");
      } else {
        setEditorTheme("vs-light");
      }
    }, [theme]);
    const copyEstruturaRodaperodape = () => {
      navigator.clipboard.writeText(EstruturadoRodape);
    };
    const copyEstruturaRodapeagra= () => {
      navigator.clipboard.writeText(EstruturaRodapeagradecimentos);
    };
    const copyEstruturaRodapebutton= () => {
      navigator.clipboard.writeText(EstruturaRodapebutton);
    };
    const copyEstruturaRodapedesc= () => {
      navigator.clipboard.writeText(EstruturaRodapedesc);
    };
    const copyEstruturaRodape= () => {
      navigator.clipboard.writeText(EstruturaRodape);
    };
    const copyEstruturaMainbutton= () => {
      navigator.clipboard.writeText(EstruturaMainbutton);
    };
    const copyEstruturaMainicon= () => {
      navigator.clipboard.writeText(EstruturaMainicon);
    };
    const copyEstruturaMaindesc= () => {
      navigator.clipboard.writeText(EstruturaMaindesc);
    };
    const copyEstruturaMain= () => {
      navigator.clipboard.writeText(EstruturaMain);
    };
    const copyEstruturadesc= () => {
      navigator.clipboard.writeText(EstruturaDescHeader);
    };
    const copyEstrutura = () => {
      navigator.clipboard.writeText(EstruturaHeader);
    };
    const handleEditorChange: EditorProps['onChange'] = (newHtmlCode, ev) => {
      if (typeof newHtmlCode === 'string') {
        setHtmlCode(newHtmlCode);
      }
    };
    // Copia htmlCode para a área de transferência
    const copyHTML = () => {
      navigator.clipboard.writeText(htmlCode)
        .then(() => {
          alert('Código HTML copiado para a área de transferência!');
        })
        .catch((err) => {
          console.error('Erro ao copiar código HTML:', err);
          alert('Erro ao copiar código HTML. Por favor, tente novamente.');
        });
    };
  
    // Gera e faz download de um arquivo ZIP contendo htmlCode
    const handleDownloadHTMLZip = () => {
      const zip = new JSZip();
      const folder = zip.folder('default-folder');
      if (folder) {
        folder.file('index.html', htmlCode);
      }
  
      zip.generateAsync({ type: 'blob' })
        .then((content) => {
          saveAs(content, 'default-folder.zip');
        })
        .catch((err) => {
          console.error('Erro ao gerar arquivo ZIP:', err);
          alert('Ocorreu um erro ao gerar o arquivo ZIP. Por favor, tente novamente.');
        });
    };
  
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (resolvedTheme === 'light') {
      setLogoSrc(LogoDark.src);
    } else {
      setLogoSrc(LogoLight.src);
    }
  }, [resolvedTheme]);
 
  const [editorWidth, setEditorWidth] = useState<string>('100%'); 
  const [editorHeight, setEditorHeight] = useState<string>('100vh'); 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if(isSidebarOpen == true)
      {
        
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    const HTML = document.getElementById('HTML') as HTMLElement;
    
    if (sidebar) {
      sidebar.style.display = 'block';
    }

    if (HTML) {
      HTML.style.position = 'absolute'; 
    }
    setEditorWidth('100%');
    setEditorHeight('100vh');
        
      }else{
        const sidebar = document.getElementById('sidebar') as HTMLElement;
        const HTML = document.getElementById('HTML') as HTMLElement;
        
        if (sidebar) {
          sidebar.style.display = '';
        }
    
        if (HTML) {
          HTML.style.position = ''; 
          HTML.style.right = ''; 
          HTML.style.marginLeft = '';
        }
        setEditorWidth('99.5%');
        setEditorHeight('100vh');
      }
   
  };
  const [dropdownNavbarOpen1, setDropdownNavbarOpen1] = useState(false);
  const ToggleModal1 = () => setDropdownNavbarOpen1(!dropdownNavbarOpen1);
  const [isModalOpen1, setisModalOpen1] = useState(false);
  const ModalOpen1 = () => setisModalOpen1(!isModalOpen1);
  const [isModalOpen2, setisModalOpen2] = useState(false);
  const ModalOpen2 = () => setisModalOpen2(!isModalOpen2);
  const [dropdownNavbarOpen2, setDropdownNavbarOpen2] = useState(false);
  const ToggleModal2 = () => setDropdownNavbarOpen2(!dropdownNavbarOpen2);
  const [isModalOpen3, setisModalOpen3] = useState(false);
  const ModalOpen3 = () => setisModalOpen3(!isModalOpen3);
  const [isModalOpen4, setisModalOpen4] = useState(false);
  const ModalOpen4 = () => setisModalOpen4(!isModalOpen4);
  const [isModalOpen5, setisModalOpen5] = useState(false);
  const ModalOpen5 = () => setisModalOpen5(!isModalOpen5);
  const [isModalOpen6, setisModalOpen6] = useState(false);
  const ModalOpen6 = () => setisModalOpen6(!isModalOpen6);
  const [dropdownNavbarOpen3, setDropdownNavbarOpen3] = useState(false);
  const ToggleModal3 = () => setDropdownNavbarOpen3(!dropdownNavbarOpen3);
  const [isModalOpen7, setisModalOpen7] = useState(false);
  const ModalOpen7 = () => setisModalOpen7(!isModalOpen7);
  const [isModalOpen8, setisModalOpen8] = useState(false);
  const ModalOpen8 = () => setisModalOpen8(!isModalOpen8);
  const [isModalOpen9, setisModalOpen9] = useState(false);
  const ModalOpen9 = () => setisModalOpen9(!isModalOpen9);
  const [isModalOpen10, setisModalOpen10] = useState(false);
  const ModalOpen10 = () => setisModalOpen10(!isModalOpen10);
  const [isModalOpen11, setisModalOpen11] = useState(false);
  const ModalOpen11 = () => setisModalOpen11(!isModalOpen11);
  return (

    <div className="flex">
      <aside className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-black dark:border-gray-700">
        <a href="#">
        <img
      src={logoSrc}
      className="w-auto h-8"
    />
        </a> 
  
        <a href="/inicio" className="p-1.5 text-orange-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>
  
        <a href="#" className="p-1.5 text-orange-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>
        </a>
  
        <button 
            className="p-1.5 text-orange-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100" 
            onClick={handleDownloadHTMLZip}
            aria-label="Download HTML Zip"
          >
            <svg
              className="flex items-end justify-end"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
              />
            </svg>
           
          </button>
          <button className="p-1.5 text-orange-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100" onClick={copyHTML}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="flex items-end justify-end"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                
              </button>
              
        <a href="/configuracoes" className="p-1.5 text-orange-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.496.645-.87l.213-1.28z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
        <div className="flex items-center content-end">
        <ModeToggle/>
        </div>
      </aside>
      {isSidebarOpen &&(
           <div className="h-screen py-8  overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-black dark:border-gray-700">
           <h2 className="px-5 text-lg font-medium text-orange-500 dark:text-orange-500">Menu de Componentes</h2>
   
           <div className="mt-8 space-y-4">
              
   
               <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none" onClick={ToggleModal1}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 dark:text-orange-500 group-hover:text-orange-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                   <span className="ms-3 text-orange-500">Header</span>
                   <span className="inline-flex items-center justify-center  text-sm font-medium" style={{marginLeft:'102px'}}>
                     <svg
                       className="w-2.5 h-2.5 ms-3 text-orange-500"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 10 6"
                     >
                       <path
                         stroke="currentColor"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="m1 1 4 4 4-4"
                       />
                     </svg>
                     
                   </span>
               </button>
               {dropdownNavbarOpen1 && (
              <div
                id="dropdownNavbar4"
                className="z-10 font-normal"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li onClick={ModalOpen1}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Estrutura Básica</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen2}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Descrição do Header</span>
                  </button>
                  </li>
                </ul>
              </div>
            )}
              <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none" onClick={ToggleModal2}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 dark:text-orange-500 group-hover:text-orange-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                   <span className="ms-3 text-orange-500">Main</span>
                   <span className="inline-flex items-center justify-center  text-sm font-medium" style={{marginLeft:'120px'}}>
                     <svg
                       className="w-2.5 h-2.5 ms-3 text-orange-500"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 10 6"
                     >
                       <path
                         stroke="currentColor"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="m1 1 4 4 4-4"
                       />
                     </svg>
                     
                   </span>
               </button>
               {dropdownNavbarOpen2 && (
              <div
                id="dropdownNavbar4"
                className="z-10 font-normal"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li onClick={ModalOpen3}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Estrutura Básica</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen4}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Descrição do Main</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen5}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Icon do Main</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen6}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Button do Main</span>
                  </button>
                  </li>
                </ul>
              </div>
            )}
               <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none" onClick={ToggleModal3}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-orange-500 transition duration-75 dark:text-orange-500 group-hover:text-orange-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                   <span className="ms-3 text-orange-500">Rodapé</span>
                   <span className="inline-flex items-center justify-center  text-sm font-medium" style={{marginLeft:'99px'}}>
                     <svg
                       className="w-2.5 h-2.5 ms-3 text-orange-500"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 10 6"
                     >
                       <path
                         stroke="currentColor"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="m1 1 4 4 4-4"
                       />
                     </svg>
                     
                   </span>
               </button>
               {dropdownNavbarOpen3 && (
              <div
                id="dropdownNavbar4"
                className="z-10 font-normal"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li onClick={ModalOpen7}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Estrutura Básica</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen8}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Descrição do Rodapé</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen9}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Button do Rodapé</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen10}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Agradecimentos  Rodapé</span>
                  </button>
                  </li>
                  <li onClick={ModalOpen11}>
                  <button className="flex items-center w-full px-5 py-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                      <span className="ms-3">Rodapé</span>
                  </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
       </div>
        )}
      <main className="flex-1 h-screen">
      <MonacoEditor
      width={editorWidth}
        height={editorHeight}
      defaultLanguage="html"
      defaultValue={htmlCode}
      theme={editorTheme}
      onChange={handleEditorChange}
    />
      </main>
      {isModalOpen1 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Básica Header</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica para o Header do email</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstrutura}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen1(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaHeader}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen2 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Descrição do Header</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica de descrição do Header</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturadesc}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen2(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaDescHeader}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen3 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Main</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica do Main [Código está cortado por ser grande quando copiar virá inteiro]</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaMain}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen3(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaMainCorte}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen4 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Main Descrição</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica da descrição do Main</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaMaindesc}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen4(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaMaindesc}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen5 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Main Icon</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica do Icon do Main</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaMainicon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen5(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaMainicon}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen6 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Main Button</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica do Button do Main</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaMainbutton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen6(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaMainbutton}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}

{isModalOpen7 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Rodapé</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica do Rodapé [Código está cortado por ser grande quando copiar virá inteiro]</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaRodape}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen7(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaRodapeCorte}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen8 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Rodapé Descrição</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica da Descrição do Rodapé</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaRodapedesc}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen8(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaRodapedesc}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen9 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Rodapé Button</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica do Button do Rodapé</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaRodapebutton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen9(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaRodapebutton}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen10 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Rodapé Agradecimentos</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura básica dos Agradecimentos do Rodapé</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaRodapeagra}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen10(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturaRodapeagradecimentos}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
{isModalOpen11 && (
  <div tabIndex={-1} aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative p-2 w-full max-w-fit h-full md:h-auto">
      <div className="relative p-2 bg-white rounded-lg shadow dark:bg-gray-900 sm:p-4">
        <div className="flex justify-between items-start mb-4 text-start">
          <div className="text-start">
            <h1 className="text-lg text-black dark:text-white">Estrutura Rodapé</h1>
            <p className="text-gray-500 dark:text-gray-300 max-w-4xl">Estrutura Rodapé</p>
          </div>
          
          <div className="flex items-center">
            <button className="relative flex items-center group" onClick={copyEstruturaRodaperodape}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex items-end justify-end">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="absolute hidden -top-14 left-[50%] -translate-x-1/2 z-20 origin-left px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:block dark:bg-gray-700 dark:text-white dark:border-gray-600">
                Copiar
              </span>
            </button>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setisModalOpen11(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
        <pre id='Contratação' className="text-xs">
      {EstruturadoRodape}
    </pre>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
  
}
