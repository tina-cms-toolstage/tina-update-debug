// tina/config.js
import { defineConfig } from "tinacms";

// tina/field-components/advanced-color-picker.js
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from "@headlessui/react";
import * as React2 from "react";
import { useEffect, useState } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import { Button, wrapFieldsWithMeta } from "tinacms";

// content/global-settings/global-settings.json
var global_settings_default = {
  siteInformation: {
    siteName: "ToolStage Tina Starter",
    siteUrl: "https://tinacms-nextjs-starter.netlify.app",
    logo: "https://res.cloudinary.com/tinacms-dev-media/image/upload/v1724859524/logo/toolstage_logo_reduced_w573c9.svg",
    contactData: {
      street: "Consetetur sadipscing",
      streetNo: "13",
      postalCode: "12345",
      city: "Lorem",
      email: {
        linkText: "info@toolstage.de",
        linkHref: "info@toolstage.de",
        linkType: "mailto",
        linkTarget: "_self"
      },
      phone: {
        linkText: "+49 (0)661 - 95 25 17 25",
        linkHref: "004966195251725",
        linkType: "tel",
        linkTarget: "_self"
      },
      fax: "+49 (0)661 - 95 25 17 21"
    },
    socialLinks: {
      iconStyle: "square",
      facebook: {
        linkText: "",
        linkHref: "https://www.facebook.com/",
        linkType: "standard",
        linkTarget: "_blank"
      },
      x: {
        linkText: "",
        linkHref: "https://twitter.com/",
        linkType: "",
        linkTarget: "_blank"
      },
      threads: {
        linkText: "",
        linkType: "standard",
        linkTarget: "_blank"
      },
      instagram: {
        linkText: "",
        linkType: "standard",
        linkTarget: "_blank"
      },
      youtube: {
        linkText: "",
        linkType: "standard",
        linkTarget: "_blank"
      },
      linkedIn: {
        linkText: "",
        linkType: "standard",
        linkTarget: "_blank"
      },
      xing: {
        linkText: "",
        linkType: "standard",
        linkTarget: "_blank"
      }
    }
  },
  SlideInMenu: {
    position: "right"
  },
  globalSeo: {
    metaDescription: "Die Meta-Beschreibung zeigt mit ungef\xE4hr 160 Zeichen in Suchergebnissen von Suchmaschinen den Inhalt der jeweiligen Webseite zusammengefasst an.",
    robots: {
      index: false,
      follow: false,
      imageindex: false
    }
  },
  globalLayout: {
    primaryColor: "#132C39",
    secondaryColor: "#0084B0",
    additionalColors: [
      {
        colorName: "deep-cerulean-800",
        colorValue: "#265264"
      },
      {
        colorName: "deep-cerulean-50",
        colorValue: "#F0FBFF"
      },
      {
        colorName: "deep-cerulean-100",
        colorValue: "#DFF5FF"
      },
      {
        colorName: "amaranth",
        colorValue: "#E63946"
      }
    ],
    headingColor: "#07364A",
    bodyColor: "#090909",
    advancedBackgrounds: [
      {
        advancedBackgroundName: "gradient",
        advancedBackgroundLayers: [
          {
            colorLayer: "linear-gradient(0deg, RGBA(2, 0, 36, 0.11) 1%, rgba(0,212,255,0) 100%)",
            _template: "colorLayerTemplate"
          },
          {
            colorLayer: "linear-gradient(110deg, RGBA(19, 44, 57, 1) 6%, rgba(44,101,121,1) 38%, rgba(168,218,220,1) 66%, rgba(247,255,247,1) 100%)",
            _template: "colorLayerTemplate"
          }
        ]
      }
    ],
    textStyleSets: [
      {
        name: "negativ",
        headingColor: "#FFFFFF",
        bodyColor: "#FFFFFF"
      },
      {
        name: "funky-llama",
        headingColor: "#E63946",
        bodyColor: "#323232"
      }
    ],
    buttonStyleSets: [
      {
        name: "standard",
        backgroundColor: "#1D3557",
        backgroundColorHover: "#457B9D",
        borderColor: "",
        textColor: "#F1FAEE",
        textColorHover: "#FFFFFF"
      },
      {
        name: "outline",
        backgroundColor: "transparent",
        backgroundColorHover: "transparent",
        borderColor: "#1d3557",
        borderColorHover: "#457b9d",
        borderWidth: "1",
        textColor: "#1d3557",
        textColorHover: "#457B9D"
      }
    ]
  },
  mailConfiguration: {
    logo: "https://res.cloudinary.com/tinacms-dev-media/image/upload/v1724859532/logo/toolstage_logo_i3kqmh.svg",
    contactRecipients: [
      "heinrich.kontny@gmail.com",
      "kontny@toolstage.de"
    ],
    senderName: "ToolStage Software Engineering",
    senderAddress: "mail@service.toolstage.de",
    replyAddress: "info@toolstage.de"
  },
  legalTexts: {
    imprint: {
      imprintFetch: true,
      imprintAdditionalText: "## Bildrechte\n\n\xA9 Lorem ipsum - stock.adobe.com\n\n## Konzeption, Grafik, Technische Realisierung\n\n[ToolStage Software Engineering - Web-Entwicklung & ECommerce aus Fulda](http://www.toolstage.de/)\n"
    },
    privacyPolicy: {
      privacyPolicyFetch: true,
      privacyPolicyAdditionalText: '## Sonstiges\n\n### TinaCMS\n\nDiese Seite nutzt zur Verwaltung der Seiteninhalte das Content Management System TinaCMS von Tina.io (Forestry.io Holdings Inc., 163 Great George Street, Charlottetown, PE Canada). Die Rechtsgrundlage f\xFCr die Nutzung von TinaCMS ist ein berechtigtes Interesse nach Art. 6 Abs. 1 S. 1 f DSGVO. Unser berechtigtes Interesse besteht dabei in der technisch fehlerfreien Bereitstellung und optimierten Bereitstellung unserer Dienste. Weitere Informationen zu TinaCMS finden Sie in der Datenschutzerkl\xE4rung von Tina.io: [https://tina.io/privacy-notice/](https://tina.io/privacy-notice/ "TinaCMS Privacy Notice").\n\n### Github\n\nDiese Seite nutzt zur Speicherung der Websitedaten Github von Github Inc. (Github Inc., 88 Colin P Kelly Jr. Street, San Francisco, CA 94107, USA).\xA0 Die Rechtsgrundlage f\xFCr die Nutzung von GitHub ist ein berechtigtes Interesse nach Art. 6 Abs. 1 S. 1 f DSGVO. Unser berechtigtes Interesse besteht dabei in der technisch fehlerfreien Bereitstellung und optimierten Bereitstellung unserer Dienste.\xA0 Weitere Informationen zu Github finden Sie in der Datenschutzerkl\xE4rung: [https://docs.github.com/de/site-policy/privacy-policies](https://docs.github.com/de/site-policy/privacy-policies "Github Privacy Policy").\n'
    }
  },
  siteFooter: {
    logo: "https://res.cloudinary.com/tinacms-dev-media/image/upload/v1724859532/logo/toolstage_logo_i3kqmh.svg"
  }
};

// tina/field-components/advanced-color-picker.js
var colorPresets = [
  global_settings_default.globalLayout.primaryColor,
  global_settings_default.globalLayout.secondaryColor
];
global_settings_default.globalLayout?.additionalColors && global_settings_default.globalLayout.additionalColors.forEach(({ colorValue }) => {
  colorPresets.push(colorValue);
});
var AdvancedColorPicker = wrapFieldsWithMeta(({ field, input }) => {
  const [color, setColor] = useState(input?.value ? input.value : "#ffffff");
  const { isGradient, valueToHex, rgbaArr } = useColorPicker(color, setColor);
  const [textColor, setTextColor] = useState(getContrastColor());
  function getContrastColor() {
    const brightness = Math.round(
      (parseInt(rgbaArr[0]) * 299 + parseInt(rgbaArr[1]) * 587 + parseInt(rgbaArr[2]) * 114) / 1e3
    );
    return brightness > 125 || input.value === "transparent" ? "text-black" : "text-white";
  }
  const handleChange = (val) => {
    if (!val)
      return;
    setColor(val);
    setTextColor(getContrastColor());
  };
  useEffect(() => {
    if (isGradient) {
      input.onChange(color);
    } else {
      if (rgbaArr[3] === 0) {
        input.onChange("transparent");
      } else {
        const val = rgbaArr[3] === 1 ? valueToHex() : color;
        input.onChange(val);
      }
    }
  }, [color, input, valueToHex, isGradient, rgbaArr]);
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  return React2.createElement("div", { className: "relative z-[1000]" }, React2.createElement(Popover, null, ({ open }) => React2.createElement(React2.Fragment, null, React2.createElement(PopoverButton, { as: "div" }, React2.createElement(
    "div",
    {
      className: `flex min-h-11 w-full max-w-full cursor-pointer items-center justify-center rounded-3xl px-4 py-3 text-sm shadow-[0_2px_3px_rgba(0,0,0,0.12)]`,
      size: "custom",
      style: { background: color }
    },
    React2.createElement(
      "span",
      {
        className: `inline-flex items-center justify-center font-bold ${textColor}`
      },
      React2.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "mr-2 size-4",
          fill: "currentColor",
          viewBox: "0 0 512 512"
        },
        React2.createElement("path", { d: "M377 279l1-1L482.2 173.8c19.1-19.1 29.8-45 29.8-72C512 45.6 466.4 0 410.2 0c-27 0-52.9 10.7-72 29.8L233.9 134.1l-1 1-8-8-17-17L174.1 144l17 17L351 321l17 17L401.9 304l-17-17-8-8zm-94.5 18.6L148.1 432 80 432l0-68.1L214.3 229.5l-33.9-33.9L32 344l0 88L0 472l40 40 40-32 88 0L316.4 331.6l-33.9-33.9zM448.2 139.9L344 244.1 267.9 168 372.1 63.8C382.2 53.7 395.9 48 410.2 48c29.7 0 53.8 24.1 53.8 53.8c0 14.3-5.7 28-15.8 38.1z" })
      ),
      "Farbw\xE4hler"
    )
  )), React2.createElement(
    PopoverPanel,
    {
      transition: true,
      className: "z-[9999] mt-4 flex origin-top gap-2 rounded-lg bg-[#202020] p-2 shadow-lg transition duration-200 ease-out [--anchor-gap:12px] data-[closed]:scale-95 data-[closed]:opacity-0"
    },
    ({ close }) => React2.createElement(React2.Fragment, null, React2.createElement("div", { className: "flex" }, React2.createElement(
      ColorPicker,
      {
        value: color,
        width: 290,
        height: 200,
        disbaleDarkMode: true,
        hideEyeDrop: true,
        hideAdvancedSliders: true,
        hideColorGuide: true,
        hideInputType: true,
        hideOpacity: field?.hideOpacity,
        hideControls: field?.hideControls,
        presets: colorPresets,
        onChange: (val) => {
          handleChange(val);
        }
      }
    )), React2.createElement(
      "div",
      {
        style: { background: color },
        className: "flex grow items-end justify-end rounded-lg"
      },
      React2.createElement(
        "input",
        {
          id: input.name,
          className: "block w-10/12 resize-y rounded-br-lg rounded-tl-lg bg-[rgba(0,0,0,.65)] px-4 py-2 text-sm text-white",
          ...input,
          onChange: (event) => {
            console.log(event.target.value);
            handleChange(event.target.value);
          }
        }
      )
    ))
  ))));
});

// tina/partials/fieldsets/link-fieldset.js
var linkFieldset = [
  {
    name: "linkText",
    type: "string",
    label: "Text"
  },
  {
    name: "linkHref",
    type: "string",
    label: "Link"
  },
  {
    name: "linkType",
    type: "string",
    label: "Link Typ",
    component: "select",
    options: [
      {
        value: "standard",
        label: "Standard Link"
      },
      {
        value: "tel",
        label: "Telefonnummer"
      },
      {
        value: "mailto",
        label: "E-Mail Link"
      }
    ]
  },
  {
    name: "linkTarget",
    type: "string",
    label: "Link Typ",
    component: "select",
    options: [
      {
        value: "_self",
        label: "Gleiches Fenster / Tab"
      },
      {
        value: "_blank",
        label: "Neues Fenster / Tab"
      }
    ]
  }
];
var linkFieldsetDefaults = {
  linkText: "Klick mich",
  linkHref: "#",
  linkType: "standard",
  linkTarget: "_self"
};

// tina/collections/global-settings.js
function validateColorNames(value) {
  if (value === "black" || value === "current" || value === "draft" || value === "focus" || value === "gray" || value === "heading" || value === "primary" || value === "secondary" || value === "text" || value === "transparent" || value === "white") {
    return "Folgende bezeichnungen sind nicht erlaubt: black, current, draft, focus, gray, heading, primary, secondary, text, transparent, white";
  }
}
var globalSettings = {
  name: "globalSettings",
  label: "Einstellungen",
  path: "content/global-settings",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    },
    global: true,
    beforeSubmit: async ({ form, cms, values }) => {
    }
  },
  fields: [
    {
      name: "siteInformation",
      type: "object",
      label: "Allgemeine Einstellungen / Informationen",
      fields: [
        {
          name: "siteName",
          type: "string",
          label: "Seiten Name",
          description: "Wird an das Ende des Seitentitels drangeh\xE4ngt",
          required: true
        },
        {
          name: "siteUrl",
          type: "string",
          label: "Seiten URL",
          description: 'Domain/Frontend der Seite. Wichtig: ohne "/" am Ende!',
          required: true
        },
        {
          name: "logo",
          type: "image",
          label: "Seiten Logo",
          required: true
        },
        {
          name: "contactData",
          type: "object",
          label: "Kontaktdaten",
          fields: [
            {
              name: "street",
              type: "string",
              label: "Strasse"
            },
            {
              name: "streetNo",
              type: "string",
              label: "Strasse Nr"
            },
            {
              name: "postalCode",
              type: "string",
              label: "Postleitzahl"
            },
            {
              name: "city",
              type: "string",
              label: "Ort"
            },
            {
              name: "email",
              type: "object",
              label: "E-Mail",
              fields: [...linkFieldset]
            },
            {
              name: "phone",
              type: "object",
              label: "Telefon",
              fields: [...linkFieldset]
            },
            {
              name: "mobile",
              type: "object",
              label: "Telefon - Mobil",
              fields: [...linkFieldset]
            },
            {
              name: "fax",
              type: "string",
              label: "Fax"
            }
          ]
        },
        {
          name: "socialLinks",
          type: "object",
          label: "Soziale Verlinkungen",
          fields: [
            {
              name: "iconStyle",
              type: "string",
              label: "Icon Style",
              component: "select",
              options: [
                {
                  value: "default",
                  label: "Standard"
                },
                {
                  value: "square",
                  label: "Eckig"
                },
                {
                  value: "rounded",
                  label: "Abgerundet"
                },
                {
                  value: "circle",
                  label: "Kreis"
                }
              ]
            },
            {
              name: "facebook",
              type: "object",
              label: "Facebook",
              fields: [...linkFieldset]
            },
            {
              name: "x",
              type: "object",
              label: "X / Twitter",
              fields: [...linkFieldset]
            },
            {
              name: "threads",
              type: "object",
              label: "Threads",
              fields: [...linkFieldset]
            },
            {
              name: "instagram",
              type: "object",
              label: "Instagram",
              fields: [...linkFieldset]
            },
            {
              name: "youtube",
              type: "object",
              label: "YouTube",
              fields: [...linkFieldset]
            },
            {
              name: "linkedIn",
              type: "object",
              label: "LinkedIn",
              fields: [...linkFieldset]
            },
            {
              name: "xing",
              type: "object",
              label: "Xing",
              fields: [...linkFieldset]
            }
          ]
        }
      ]
    },
    {
      name: "SlideInMenu",
      type: "object",
      label: "Mobiles Men\xFC",
      fields: [
        {
          name: "position",
          type: "string",
          label: "Position",
          ui: {
            component: "radio-group",
            variant: "button",
            direction: "horizontal"
          },
          options: [
            {
              value: "left",
              label: "Links"
            },
            {
              value: "right",
              label: "Rechts"
            }
          ]
        }
      ]
    },
    {
      name: "globalSeo",
      type: "object",
      label: "Globales SEO",
      fields: [
        {
          name: "metaDescription",
          type: "string",
          label: "Meta Beschreibung",
          ui: {
            component: "textarea",
            validate: (value, data) => {
              const lengthOfMetaDescription = value?.length || 0;
              if (lengthOfMetaDescription >= 160) {
                return "Die Meta Beschreibung sollte weniger wie 160 Zeichen beinhalten";
              }
              if (lengthOfMetaDescription >= 1 && lengthOfMetaDescription <= 50) {
                return "Die Meta Beschreibung sollte mehr wie 50 Zeichen beinhalten";
              }
            }
          }
        },
        {
          name: "metaKeywords",
          type: "object",
          label: "Meta Keywords",
          fields: [
            {
              name: "metaKeywordList",
              type: "string",
              label: "Keyword",
              description: "Ein Keyword pro Eintrag/Zeile",
              list: true
            }
          ]
        },
        {
          name: "robots",
          type: "object",
          label: "Globale Robots konfiguration",
          fields: [
            {
              name: "index",
              type: "boolean",
              label: "Index",
              description: "Sollen die Seiten von Suchmaschinen indiziert werden."
            },
            {
              name: "follow",
              type: "boolean",
              label: "Follow",
              description: "Soll die Suchmaschine den internen und externen Links folgen"
            },
            {
              name: "imageindex",
              type: "boolean",
              label: "Image Index",
              description: "Sollen auch die Bilder der Website von Google indiziert werden"
            }
          ]
        }
      ]
    },
    {
      name: "globalLayout",
      type: "object",
      label: "Layout",
      fields: [
        {
          name: "primaryColor",
          type: "string",
          label: "Farbe prim\xE4r",
          ui: {
            component: "color"
          }
        },
        {
          name: "secondaryColor",
          type: "string",
          label: "Farbe sekund\xE4r",
          ui: {
            component: "color"
          }
        },
        {
          name: "additionalColors",
          type: "object",
          label: "Zus\xE4tzliche Farben",
          list: true,
          max: 6,
          fields: [
            {
              name: "colorName",
              type: "string",
              label: "Name",
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value);
                },
                format: (val) => val && val.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
              }
            },
            {
              name: "colorValue",
              type: "string",
              label: "Farbwert",
              ui: {
                component: "color"
              }
            }
          ],
          ui: {
            defaultItem: {
              colorName: "farb-bezeichnung",
              colorValue: "#000000"
            },
            itemProps: (item) => {
              return {
                label: item?.colorName,
                className: "my-1",
                style: { borderLeft: "1.5em solid " + item?.colorValue }
              };
            }
          }
        },
        {
          name: "headingColor",
          type: "string",
          label: "Farbe \xDCberschriften",
          ui: {
            component: "color"
          }
        },
        {
          name: "bodyColor",
          type: "string",
          label: "Farbe Text",
          ui: {
            component: "color"
          }
        },
        {
          name: "advancedBackgrounds",
          type: "object",
          label: "Erweiterte Hintergundvorgaben",
          list: true,
          max: 6,
          fields: [
            {
              name: "advancedBackgroundName",
              type: "string",
              label: "Name",
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value);
                },
                format: (val) => val && val.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
              }
            },
            {
              name: "advancedBackgroundLayers",
              type: "object",
              label: "Hintergrundebenen",
              list: true,
              templates: [
                {
                  name: "colorLayerTemplate",
                  label: "Farb/Verlaufsebene",
                  fields: [
                    {
                      name: "colorLayer",
                      type: "string",
                      label: "Farb/Verlaufsebene",
                      ui: {
                        component: AdvancedColorPicker
                      }
                    }
                  ],
                  ui: {
                    itemProps: (item) => {
                      return {
                        label: item?.colorLayer
                      };
                    }
                  }
                },
                {
                  name: "imageLayerTemplate",
                  label: "Bild",
                  fields: [
                    {
                      name: "image",
                      type: "image",
                      label: "Bild"
                    },
                    {
                      name: "bgPos",
                      type: "string",
                      label: "Hintergrund Position",
                      component: "select",
                      options: [
                        {
                          value: "left top",
                          label: "links oben"
                        },
                        {
                          value: "left center",
                          label: "links mitte"
                        },
                        {
                          value: "left bottom",
                          label: "links unten"
                        },
                        {
                          value: "right top",
                          label: "rechts oben"
                        },
                        {
                          value: "right center",
                          label: "rechts mitte"
                        },
                        {
                          value: "right bottom",
                          label: "rechts unten"
                        },
                        {
                          value: "center top",
                          label: "mitte oben"
                        },
                        {
                          value: "center center",
                          label: "mitte"
                        },
                        {
                          value: "center bottom",
                          label: "mitte unten"
                        }
                      ]
                    },
                    {
                      name: "bgPosStr",
                      type: "string",
                      label: "Hintergrund Position Override",
                      description: 'Format: "50% 50%" oder "50px 50px". \xDCberschreibt die Auwahl des Dropdowns mit einer flexiblen Position.'
                    },
                    {
                      name: "bgRep",
                      type: "string",
                      label: "Hintergrund Wiederholen",
                      component: "select",
                      options: [
                        {
                          value: "repeat",
                          label: "x- & y-achse"
                        },
                        {
                          value: "repeat-x",
                          label: "x-achse"
                        },
                        {
                          value: "repeat-y",
                          label: "y-achse"
                        },
                        {
                          value: "no-repeat",
                          label: "nicht wiederholen"
                        }
                      ]
                    }
                  ],
                  ui: {
                    defaultItem: {
                      bgPos: "center center",
                      bgRep: "repeat"
                    },
                    itemProps: (item) => {
                      return {
                        label: item?.colorLayer
                      };
                    }
                  }
                }
              ]
            }
          ],
          ui: {
            defaultItem: {
              advancedBackgroundName: "hintergrund-bezeichnung"
            },
            itemProps: (item) => {
              return {
                label: item?.advancedBackgroundName,
                className: "my-1",
                style: { borderLeft: "1.5em solid " + item?.colorValue }
              };
            }
          }
        },
        {
          name: "textStyleSets",
          type: "object",
          label: "Zus\xE4tzliche Schrift Farbs\xE4tze",
          list: true,
          max: 6,
          fields: [
            {
              name: "name",
              type: "string",
              label: "Name",
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value);
                },
                format: (val) => val && val.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
              }
            },
            {
              name: "headingColor",
              type: "string",
              label: "Farbe \xDCberschriften",
              ui: {
                component: "color"
              }
            },
            {
              name: "bodyColor",
              type: "string",
              label: "Farbe Text",
              ui: {
                component: "color"
              }
            }
          ],
          ui: {
            defaultItem: {
              name: "schrift-farbsatz-name",
              headingColor: "#000000",
              bodyColor: "#000000"
            },
            itemProps: (item) => {
              return {
                label: item?.name,
                className: "my-1",
                style: {
                  border: "1.5em solid",
                  borderImageSlice: 1,
                  borderWidth: "1.5em",
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderImageSource: "linear-gradient(to bottom, " + item.headingColor + " 0%," + item.headingColor + " 50%, " + item.bodyColor + " 50%, " + item.bodyColor + " 100%)"
                }
              };
            }
          }
        },
        {
          name: "buttonStyleSets",
          type: "object",
          label: "Button Stile",
          description: 'Falls ein Stil immer vorausgew\xE4hlt werden soll, muss dieser "standard" hei\xDFen',
          list: true,
          max: 6,
          fields: [
            {
              name: "name",
              type: "string",
              label: "Name",
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value);
                },
                format: (val) => val && val.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
              }
            },
            {
              name: "backgroundColor",
              type: "string",
              label: "Farbe Hintergrund",
              ui: {
                component: AdvancedColorPicker
              }
            },
            {
              name: "backgroundColorHover",
              type: "string",
              label: "Farbe Hintergrund Hover",
              ui: {
                component: AdvancedColorPicker
              }
            },
            {
              name: "borderColor",
              type: "string",
              label: "Farbe Rahmen",
              ui: {
                component: AdvancedColorPicker
              }
            },
            {
              name: "borderColorHover",
              type: "string",
              label: "Farbe Rahmen Hover",
              ui: {
                component: AdvancedColorPicker
              }
            },
            {
              name: "borderWidth",
              type: "string",
              label: "St\xE4rke Rahmen",
              component: "select",
              options: [
                {
                  value: "0",
                  label: "kein Rahmen"
                },
                {
                  value: "1",
                  label: "1px"
                },
                {
                  value: "2",
                  label: "2px"
                },
                {
                  value: "3",
                  label: "3px"
                },
                {
                  value: "4",
                  label: "4px"
                }
              ]
            },
            {
              name: "textColor",
              type: "string",
              label: "Farbe Text",
              ui: {
                component: "color"
              }
            },
            {
              name: "textColorHover",
              type: "string",
              label: "Farbe Text Hover",
              ui: {
                component: "color"
              }
            }
          ],
          ui: {
            defaultItem: {
              name: "button-farbsatz-name",
              backgroundColor: "",
              borderColor: "",
              borderWidth: "0",
              textColor: "#000000"
            },
            itemProps: (item) => {
              const topColor = item?.backgroundColor ? item.backgroundColor : item?.borderColor;
              return {
                label: item?.name,
                className: "my-1",
                style: {
                  border: "1.5em solid",
                  borderImageSlice: 1,
                  borderWidth: "1.5em",
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderImageSource: "linear-gradient(to bottom, " + topColor + " 0%," + topColor + " 50%, " + item.textColor + " 50%, " + item.textColor + " 100%)"
                }
              };
            }
          }
        },
        {
          name: "twSafeList",
          type: "object",
          label: "Tailwind Safelist Klassen",
          fields: [
            {
              name: "safeListClasses",
              type: "string",
              label: "Utility Classes",
              description: "Hier k\xF6nnen Tailwind Klassen f\xFCr die Safelist eingetragen werden damit diese vom Backend aus nutzbar sind",
              list: true
            }
          ]
        }
      ]
    },
    {
      name: "mailConfiguration",
      type: "object",
      label: "Mail Konfiguration",
      fields: [
        {
          name: "logo",
          type: "image",
          label: "E-Mail Logo",
          description: "Logo der E-Mail Kopfzeile"
        },
        {
          name: "contactRecipients",
          type: "string",
          label: "Empf\xE4nger Kontaktformular",
          description: "E-Mail Adressen f\xFCr den Empfang des Kontaktformulars",
          list: true
        },
        {
          name: "senderName",
          type: "string",
          label: "Absendername"
        },
        {
          name: "senderAddress",
          type: "string",
          label: "Absenderadresse",
          description: "\xDCber diese Adresse wird das Kontaktformular versendet"
        },
        {
          name: "replyAddress",
          type: "string",
          label: "Antwortadresse",
          description: "Betrifft z.B. die Best\xE4tigungsmail des Kontaktformulars die der Kunde erh\xE4lt. Falls er in seinem E-Mail Client auf Antworten klickt, wird diese Adresse als Empf\xE4nger gesetzt."
        }
      ]
    },
    {
      name: "legalTexts",
      type: "object",
      label: "Rechtstexte",
      fields: [
        {
          name: "imprint",
          type: "object",
          label: "Impressum",
          fields: [
            {
              name: "imprintFetch",
              type: "boolean",
              label: "Impressum von eRecht24 laden"
            },
            {
              name: "imprintAdditionalText",
              type: "rich-text",
              label: "Impressum",
              description: "Falls das Impressum von eRecht24 geladen wird, so wird dieser Textbereich unetrhalb der eRecht24 Ausgabe angezeigt"
            }
          ]
        },
        {
          name: "privacyPolicy",
          type: "object",
          label: "Datenschutz",
          fields: [
            {
              name: "privacyPolicyFetch",
              type: "boolean",
              label: "Datenschutzerkl\xE4rung von eRecht24 laden"
            },
            {
              name: "privacyPolicyAdditionalText",
              type: "rich-text",
              label: "Datenschutz",
              description: "Falls der Datenschutztext von eRecht24 geladen wird, so wird dieser Textbereich unetrhalb der eRecht24 Ausgabe angezeigt"
            }
          ]
        }
      ]
    },
    {
      name: "siteFooter",
      type: "object",
      label: "Seiten Footer",
      fields: [
        {
          name: "logo",
          type: "image",
          label: "Seiten Logo",
          description: "Falls gesetzt, \xFCberschreibt es die Ausgabe des standard Seiten Logos"
        }
      ]
    }
  ]
};
var global_settings_default2 = globalSettings;

// tina/collections/navigation.js
var Navigation = {
  name: "navigation",
  label: "Navigation",
  path: "content/navigation",
  format: "json",
  ui: {
    global: true,
    itemProps: (item) => {
      return {
        label: item?.title
      };
    },
    defaultItem: (item) => {
      return {
        title: "Men\xFC"
      };
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      }
    }
  },
  fields: [
    {
      name: "title",
      type: "string",
      label: "Men\xFC Titel",
      isTitle: true,
      required: true
    },
    {
      name: "menu",
      type: "object",
      label: "Men\xFCpunkte",
      list: true,
      ui: {
        description: "Links oder Sprungmarken",
        itemProps: (item) => {
          return { label: item?.linkText };
        },
        defaultItem: {
          linkHref: "/",
          linkText: "Neuer Men\xFCpunkt",
          linkType: "standard",
          linkTarget: "_self"
        }
      },
      fields: [
        ...linkFieldset,
        {
          name: "submenu",
          type: "object",
          label: "Sub Men\xFCpunkte",
          list: true,
          ui: {
            description: "Links oder Sprungmarken",
            itemProps: (item) => {
              return { label: item?.linkText };
            },
            defaultItem: {
              linkHref: "/",
              linkText: "Neuer Men\xFCpunkt",
              linkType: "standard",
              linkTarget: "_self"
            }
          },
          fields: [...linkFieldset]
        }
      ]
    }
  ]
};
var navigation_default = Navigation;

// tina/collections/page.js
import slugify from "@sindresorhus/slugify";
import React9 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta8 } from "tinacms";

// tina/partials/objects/seo-options.js
var seoOptions = {
  name: "seo",
  type: "object",
  label: "SEO",
  fields: [
    {
      name: "metaTitle",
      type: "string",
      label: "Seitentitel"
    },
    {
      name: "metaDescription",
      type: "string",
      label: "Meta Beschreibung",
      ui: {
        component: "textarea",
        description: "Die Meta Beschreibung sollte zwischen 50 und 160 Zeichen beinhalten",
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0;
          if (lengthOfMetaDescription >= 160) {
            return "Die Meta Beschreibung sollte weniger wie 160 Zeichen beinhalten";
          }
          if (lengthOfMetaDescription >= 1 && lengthOfMetaDescription <= 50) {
            return "Die Meta Beschreibung sollte mehr wie 50 Zeichen beinhalten";
          }
        }
      }
    },
    {
      name: "metaKeywords",
      label: "Meta Keywords",
      type: "object",
      fields: [
        {
          name: "metaKeywordList",
          type: "string",
          label: "Keyword Liste",
          description: "Ein Keyword pro Eintrag/Zeile",
          list: true
        }
      ],
      ui: {}
    }
  ]
};
var seo_options_default = seoOptions;

// tina/partials/objects/social-sharing-options.js
var socialSharingOptions = {
  name: "socialSharingOptions",
  type: "object",
  label: "Social Sharing",
  fields: [
    {
      name: "title",
      type: "string",
      label: "Titel",
      ui: {
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0;
          if (lengthOfMetaDescription >= 90) {
            return "Der Titel sollte nicht mehr wie 90 Zeichen beinhalten";
          }
        }
      }
    },
    {
      name: "description",
      type: "string",
      label: "Beschreibungstext",
      ui: {
        component: "textarea",
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0;
          if (lengthOfMetaDescription >= 200) {
            return "Der Beschreibungstext sollte weniger wie 200 Zeichen beinhalten";
          }
        }
      }
    },
    {
      name: "image",
      type: "image",
      label: "Bild"
    }
  ]
};
var social_sharing_options_default = socialSharingOptions;

// tina/field-components/bg-color-picker.js
import * as React3 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta2 } from "tinacms";

// lib/helpers/array.js
function getUniqueListBy(data, key) {
  return [...new Map(data.map((item) => [item[key], item])).values()];
}

// tina/field-components/bg-color-picker.js
var colorOptions = ["transparent", "white", "primary", "secondary"];
var inputClasses = {
  transparent: {
    backgroundColor: "transparent",
    background: "linear-gradient(to right bottom, rgba(255,255,255,1) 47%, rgba(255,0,0,1) 50%, rgba(255,255,255,1) 53%)"
  },
  white: {
    backgroundColor: "#ffffff"
  },
  primary: {
    backgroundColor: global_settings_default.globalLayout.primaryColor
  },
  secondary: {
    backgroundColor: global_settings_default.globalLayout.secondaryColor
  }
};
global_settings_default.globalLayout?.additionalColors && getUniqueListBy(
  global_settings_default.globalLayout.additionalColors,
  "colorName"
).forEach(({ colorName, colorValue }, i) => {
  colorOptions.push(colorName);
  inputClasses[colorName] = { backgroundColor: colorValue };
});
global_settings_default.globalLayout?.advancedBackgrounds && getUniqueListBy(
  global_settings_default.globalLayout.advancedBackgrounds,
  "advancedBackgroundName"
).forEach(({ advancedBackgroundName, advancedBackgroundLayers }, i) => {
  let cssBg = "";
  let ruleIndex = 0;
  advancedBackgroundLayers && advancedBackgroundLayers.forEach((layer, index) => {
    if (layer._template === "imageLayerTemplate")
      return;
    const seperator = ruleIndex > 0 ? ", " : "";
    layer?.colorLayer && (cssBg += seperator + layer.colorLayer);
    ruleIndex++;
  });
  colorOptions.push(advancedBackgroundName);
  inputClasses[advancedBackgroundName] = { background: cssBg };
});
var BgColorPicker = wrapFieldsWithMeta2(({ input }) => {
  return React3.createElement(React3.Fragment, null, React3.createElement(
    "input",
    {
      type: "text",
      id: input.name,
      className: "hidden",
      ...input
    }
  ), React3.createElement("div", { className: "flex flex-wrap gap-2" }, colorOptions.map((color, i) => {
    return React3.createElement(
      "button",
      {
        key: "bg-color-picker" - i,
        style: { ...inputClasses[color] },
        className: `size-9 rounded-full border-2 border-white shadow-md ${input.value === color ? "ring ring-blue-400 ring-offset-2" : ""}`,
        onClick: () => {
          input.onChange(color);
        }
      }
    );
  })));
});

// tina/partials/fieldsets/tailwind-sizing-scale.js
var twSizingScale = [
  {
    value: "0",
    label: "0px"
  },
  {
    value: "2.5",
    label: "10px"
  },
  {
    value: "3",
    label: "12px"
  },
  {
    value: "4",
    label: "16px"
  },
  {
    value: "5",
    label: "20px"
  },
  {
    value: "6",
    label: "24px"
  },
  {
    value: "7",
    label: "28px"
  },
  {
    value: "8",
    label: "32px"
  },
  {
    value: "9",
    label: "36px"
  },
  {
    value: "10",
    label: "40px"
  },
  {
    value: "11",
    label: "44px"
  },
  {
    value: "12",
    label: "48px"
  },
  {
    value: "14",
    label: "56px"
  },
  {
    value: "16",
    label: "64px"
  },
  {
    value: "20",
    label: "80px"
  },
  {
    value: "24",
    label: "96px"
  },
  {
    value: "28",
    label: "112px"
  },
  {
    value: "32",
    label: "128px"
  },
  {
    value: "36",
    label: "144px"
  },
  {
    value: "40",
    label: "160px"
  }
];

// tina/partials/fieldsets/options-adv-page-section.js
var advPageSectionOptions = [
  {
    name: "sizing",
    type: "string",
    label: "Sektion Ausgabe",
    options: [
      {
        value: "container",
        label: "Im Container"
      },
      {
        value: "full",
        label: "Volle Breite"
      }
    ]
  },
  {
    name: "wrapperTag",
    type: "string",
    label: "Wrapper Tag",
    component: "select",
    options: [
      {
        value: "article",
        label: "article"
      },
      {
        value: "aside",
        label: "aside"
      },
      {
        value: "div",
        label: "div"
      },
      {
        value: "section",
        label: "section"
      }
    ]
  },
  {
    name: "paddings",
    type: "object",
    label: "Abst\xE4nde",
    fields: [
      {
        name: "paddingTop",
        type: "string",
        label: "Au\xDFenabstand Oben",
        options: [...twSizingScale]
      },
      {
        name: "paddingTopMobile",
        type: "string",
        label: "Au\xDFenabstand Oben Mobil",
        options: [...twSizingScale]
      },
      {
        name: "paddingBottom",
        type: "string",
        label: "Au\xDFenabstand Unten",
        options: [...twSizingScale]
      },
      {
        name: "paddingBottomMobile",
        type: "string",
        label: "Au\xDFenabstand Unten Mobil",
        options: [...twSizingScale]
      },
      {
        name: "paddingBlocks",
        type: "string",
        label: "Abstand zwischen Bl\xF6cken",
        options: [...twSizingScale]
      },
      {
        name: "paddingBlocksMobile",
        type: "string",
        label: "Abstand zwischen Bl\xF6cken Mobil",
        options: [...twSizingScale]
      }
    ]
  },
  {
    name: "cssClass",
    type: "string",
    label: "CSS Klasse",
    ui: {
      format: (val) => val ? val.toLowerCase() : ""
    }
  },
  {
    name: "cssId",
    type: "string",
    label: "CSS ID",
    ui: {
      format: (val) => val ? val.toLowerCase().replace(/ /g, "-") : ""
    }
  }
];
var advPageSectionOptionsDefaults = {
  sizing: "container",
  wrapperTag: "section",
  paddings: {
    paddingTop: "20",
    paddingTopMobile: "5",
    paddingBottom: "20",
    paddingBottomMobile: "5",
    paddingBlocks: "20",
    paddingBlocksMobile: "10"
  }
};

// tina/partials/fieldsets/options-publishing.js
var blockOptionsPublishing = [
  {
    name: "draft",
    type: "boolean",
    label: "Entwurf",
    required: true,
    description: "Wenn aktiviert wird dieser Block nicht ver\xF6ffentlicht"
  }
];
var blockOptionsPublishingDefaults = {
  draft: false
};

// tina/field-components/fa-tina-standard-subset-icon-picker.js
import { all as all2 } from "@awesome.me/kit-5aabe2e567/icons";
import { faBan, faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import {
  Popover as Popover2,
  PopoverButton as PopoverButton2,
  PopoverPanel as PopoverPanel2,
  Transition as Transition2
} from "@headlessui/react";
import * as React4 from "react";
import { Button as Button2, wrapFieldsWithMeta as wrapFieldsWithMeta3 } from "tinacms";

// components/ui/font-awesome/fa-tina-standard-subset.jsx
import { all } from "@awesome.me/kit-5aabe2e567/icons";
import {
  faCartShopping,
  faGlobePointer
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var defaultSubset = Object.fromEntries(
  Object.entries(all).map(([key, val]) => [
    val.prefix + "-" + val.iconName,
    val
  ])
);
var customerSubset = {
  "fas-globe-pointer": faGlobePointer,
  "fas-cart-shopping": faCartShopping
};
var SubsetIconOptions = { ...customerSubset, ...defaultSubset };

// tina/field-components/fa-tina-standard-subset-icon-picker.js
var parseIconName = (name) => {
  const splitName = name.split(/(?=[A-Z])/);
  if (splitName.length > 1) {
    return splitName.slice(1).join(" ");
  } else {
    return name;
  }
};
var FaTinaStandardSubsetIconPicker = wrapFieldsWithMeta3(
  ({ input }) => {
    const [filter, setFilter] = React4.useState("");
    const filteredBlocks = React4.useMemo(() => {
      return Object.keys(SubsetIconOptions).filter((name) => {
        if (SubsetIconOptions[name].iconName.toLowerCase().includes(filter.toLowerCase()))
          return name;
      });
    }, [filter]);
    const inputLabel = Object.keys(SubsetIconOptions).includes(input.value) ? parseIconName(SubsetIconOptions[input.value].iconName) : "Icon Auswahl";
    const InputIcon = SubsetIconOptions[input.value] ? React4.createElement(FontAwesomeIcon2, { icon: SubsetIconOptions[input.value] }) : null;
    return React4.createElement("div", { className: "relative z-[1000]" }, React4.createElement(
      "input",
      {
        type: "text",
        id: input.name,
        className: "hidden",
        ...input
      }
    ), React4.createElement(Popover2, null, ({ open }) => React4.createElement(React4.Fragment, null, React4.createElement(PopoverButton2, { as: "span" }, React4.createElement(
      Button2,
      {
        className: `h-11 px-4 text-sm ${InputIcon ? "h-11" : "h-10"}`,
        size: "custom",
        rounded: "full",
        variant: open ? "secondary" : "white"
      },
      InputIcon && React4.createElement("span", { className: "mr-1 inline-block h-auto w-7 fill-current text-blue-500" }, React4.createElement(FontAwesomeIcon2, { icon: SubsetIconOptions[input.value] })),
      inputLabel,
      !InputIcon && React4.createElement("span", { className: "ml-1 inline-block fill-current opacity-70" }, React4.createElement(FontAwesomeIcon2, { icon: faChevronRight }))
    )), React4.createElement(
      "div",
      {
        className: "absolute -bottom-2 left-0 w-full min-w-[192px] max-w-2xl translate-y-full",
        style: { zIndex: 1e3 }
      },
      React4.createElement(
        Transition2,
        {
          enter: "transition duration-150 ease-out",
          enterFrom: "transform opacity-0 -translate-y-2",
          enterTo: "transform opacity-100 translate-y-0",
          leave: "transition duration-75 ease-in",
          leaveFrom: "transform opacity-100 translate-y-0",
          leaveTo: "transform opacity-0 -translate-y-2"
        },
        React4.createElement(PopoverPanel2, { className: "border-gray-150 relative z-50 overflow-hidden rounded-lg border bg-white shadow-lg" }, ({ close }) => React4.createElement("div", { className: "flex size-full max-h-96 flex-col" }, React4.createElement("div", { className: "z-10 border-b border-gray-100 bg-gray-50 p-2 shadow-sm" }, React4.createElement(
          "input",
          {
            type: "text",
            className: "block w-full rounded-sm border border-gray-100 bg-white px-2.5 py-1.5 text-sm shadow-inner placeholder:text-gray-200",
            onClick: (event) => {
              event.stopPropagation();
              event.preventDefault();
            },
            value: filter,
            onChange: (event) => {
              setFilter(event.target.value);
            },
            placeholder: "Filter..."
          }
        )), filteredBlocks.length === 0 && React4.createElement("span", { className: "relative bg-gray-50 px-2 py-3 text-center text-xs italic text-gray-300" }, "Keine passenden Icons"), filteredBlocks.length > 0 && React4.createElement("div", { className: "grid w-full auto-rows-auto grid-cols-6 overflow-y-auto p-2" }, React4.createElement(
          "button",
          {
            className: "relative flex-1 rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50 hover:text-blue-500 focus:bg-gray-50 focus:text-blue-500",
            key: "clear-input",
            onClick: () => {
              input.onChange("");
              setFilter("");
              close();
            }
          },
          React4.createElement(
            FontAwesomeIcon2,
            {
              className: "h-auto w-6 text-gray-200",
              icon: faBan
            }
          )
        ), filteredBlocks.map((name) => {
          return React4.createElement(
            "button",
            {
              className: "relative flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50 hover:text-blue-500 focus:bg-gray-50 focus:text-blue-500",
              key: name,
              onClick: () => {
                input.onChange(name);
                setFilter("");
                close();
              }
            },
            React4.createElement(FontAwesomeIcon2, { icon: SubsetIconOptions[name] })
          );
        }))))
      )
    ))));
  }
);

// tina/field-components/text-color-sheme-picker.js
import * as React5 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta4 } from "tinacms";
var colorOptions2 = ["default"];
var inputStyles = {
  default: {
    background: "linear-gradient(to bottom, " + global_settings_default.globalLayout.headingColor + " 0%," + global_settings_default.globalLayout.headingColor + " 50%, " + global_settings_default.globalLayout.bodyColor + " 50%, " + global_settings_default.globalLayout.bodyColor + " 100%)"
  }
};
global_settings_default.globalLayout?.textStyleSets && global_settings_default.globalLayout.textStyleSets.forEach(
  ({ name, headingColor, bodyColor }) => {
    colorOptions2.push(name);
    inputStyles[name] = {
      background: "linear-gradient(to bottom, " + headingColor + " 0%," + headingColor + " 50%, " + bodyColor + " 50%, " + bodyColor + " 100%)"
    };
  }
);
var TextColorShemePicker = wrapFieldsWithMeta4(({ input }) => {
  return React5.createElement(React5.Fragment, null, React5.createElement(
    "input",
    {
      type: "text",
      id: input.name,
      className: "hidden",
      ...input
    }
  ), React5.createElement("div", { className: "flex flex-wrap gap-2" }, colorOptions2.map((color, i) => {
    return React5.createElement(
      "button",
      {
        key: "txt_color_sheme_picker" - i,
        style: { ...inputStyles[color] },
        className: `size-9 rounded-full border-2 border-white shadow-md ${input.value === color ? "ring ring-blue-400 ring-offset-2" : ""}`,
        onClick: () => {
          input.onChange(color);
        }
      }
    );
  })));
});

// tina/partials/fieldsets/options-adv-card-rendering.js
var advCardOptionsRendering = [
  {
    name: "headerTag",
    type: "string",
    label: "Header Tag",
    component: "select",
    options: [
      {
        value: "h2",
        label: "h2"
      },
      {
        value: "h3",
        label: "h3"
      },
      {
        value: "h4",
        label: "h4"
      },
      {
        value: "h5",
        label: "h5"
      },
      {
        value: "h6",
        label: "h6"
      }
    ]
  },
  {
    name: "wrapperTag",
    type: "string",
    label: "Wrapper Tag",
    component: "select",
    options: [
      {
        value: "article",
        label: "article"
      },
      {
        value: "aside",
        label: "aside"
      },
      {
        value: "div",
        label: "div"
      },
      {
        value: "section",
        label: "section"
      }
    ]
  },
  {
    name: "cssClass",
    type: "string",
    label: "CSS Klasse",
    ui: {
      format: (val) => val ? val.toLowerCase() : ""
    }
  }
];
var advCardOptionsRenderingDefaults = {
  headerTag: "h3",
  wrapperTag: "div"
};

// tina/field-components/button-color-sheme-picker.js
import * as React6 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta5 } from "tinacms";
var colorOptions3 = [];
var inputStyles2 = {};
global_settings_default.globalLayout?.buttonStyleSets && global_settings_default.globalLayout.buttonStyleSets.forEach(
  ({ name, backgroundColor, borderColor, textColor }) => {
    colorOptions3.push(name);
    inputStyles2[name] = {
      borderColor: borderColor ? borderColor : "#fff",
      backgroundColor: backgroundColor ? backgroundColor : "transparent",
      color: textColor
    };
  }
);
var ButtonColorShemePicker = wrapFieldsWithMeta5(({ input }) => {
  return React6.createElement(React6.Fragment, null, React6.createElement(
    "input",
    {
      type: "text",
      id: input.name,
      className: "hidden",
      ...input
    }
  ), React6.createElement("div", { className: "flex flex-wrap gap-2" }, colorOptions3.map((color, i) => {
    return React6.createElement(
      "button",
      {
        key: "btn_color_scheme_picker" - i,
        style: { ...inputStyles2[color] },
        className: `size-9 rounded-full border-2 text-2xl shadow-md ${input.value === color ? "ring ring-blue-400 ring-offset-2" : ""}`,
        onClick: () => {
          input.onChange(color);
        }
      },
      "\u30C3"
    );
  })));
});

// tina/templates/elements/button.js
var button = {
  name: "button",
  label: "Button",
  fields: [
    ...linkFieldset,
    {
      name: "faIcon",
      type: "string",
      label: "Icon",
      ui: {
        component: FaTinaStandardSubsetIconPicker
      }
    },
    {
      name: "colorScheme",
      type: "string",
      label: "Button Farbsatz",
      required: true,
      ui: {
        component: ButtonColorShemePicker
      }
    },
    {
      name: "size",
      type: "string",
      label: "Gr\xF6\xDFe",
      options: [
        { label: "Klein", value: "small" },
        { label: "Standard", value: "medium" },
        { label: "Gro\xDF", value: "large" }
      ]
    }
  ],
  ui: {
    defaultItem: {
      ...linkFieldsetDefaults,
      colorScheme: "standard",
      size: "medium"
    },
    itemProps: (item) => {
      return {
        label: item?.linkText
      };
    }
  }
};
var button_default = button;

// tina/templates/content-blocks/cards/icon-text-card.js
var iconTextCardSchema = {
  name: "iconTextCard",
  label: "Icon / Text Card",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "faIcon",
      type: "string",
      label: "Icon",
      ui: {
        component: FaTinaStandardSubsetIconPicker
      }
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "introtext",
      type: "rich-text",
      label: "Text"
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    {
      name: "backgroundColor",
      type: "string",
      label: "Hintergrundfarbe",
      ui: {
        component: BgColorPicker
      }
    },
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "advancedCardOptions",
      type: "object",
      label: "Card Einstellungen",
      fields: [
        ...advCardOptionsRendering,
        {
          name: "iconPosition",
          type: "string",
          label: "Icon Position",
          component: "select",
          options: [
            {
              value: "left",
              label: "Links"
            },
            {
              value: "top",
              label: "oben"
            }
          ]
        }
      ]
    }
  ],
  ui: {
    previewSrc: "/blocks/cards/icon-text-card.png",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        faIcon: "fas-rocket-launch",
        title: "Icon / Text Card",
        introtext: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              ]
            }
          ]
        },
        advancedCardOptions: {
          ...advCardOptionsRenderingDefaults,
          iconPosition: "left",
          roundEdges: "tl-br"
        }
      };
    }
  }
};
var icon_text_card_default = iconTextCardSchema;

// tina/partials/fieldsets/cloudinary-effect.js
import React7 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta6 } from "tinacms";
var cloudinaryEffectOptions = [
  {
    name: "effects",
    type: "object",
    label: "Korrekturen und Effekte",
    fields: [
      {
        name: "autoColor",
        type: "number",
        label: "Auto Farbkorrektur",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "autoColor",
                id: "autoColor",
                type: "range",
                min: "0",
                max: "100",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "autoContrast",
        type: "number",
        label: "Auto Kontrast",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "autoContrast",
                id: "autoContrast",
                type: "range",
                min: "0",
                max: "100",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "autoBrightness",
        type: "number",
        label: "Auto Helligkeit",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "autoBrightness",
                id: "autoBrightness",
                type: "range",
                min: "0",
                max: "100",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "improve",
        type: "number",
        label: "Auto Bildverbesserung",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "improve",
                id: "improve",
                type: "range",
                min: "0",
                max: "100",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "sharpen",
        type: "number",
        label: "Sch\xE4rfen",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "sharpen",
                id: "sharpen",
                type: "range",
                min: "0",
                max: "150",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "gamma",
        type: "number",
        label: "Relative Helligkeit (Gamma)",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta6(({ field, input, meta }) => {
            return React7.createElement("div", null, React7.createElement(
              "input",
              {
                name: "gamma",
                id: "gamma",
                type: "range",
                min: "-50",
                max: "150",
                step: "25",
                ...input
              }
            ), React7.createElement("br", null), "Angewandte Korrekur: ", input.value ? input.value : "0", "%");
          })
        }
      },
      {
        name: "redeye",
        type: "boolean",
        label: "Entferne Rote Augen"
      },
      {
        name: "grayscale",
        type: "boolean",
        label: "Graustufen"
      },
      {
        name: "sepia",
        type: "boolean",
        label: "Sepia"
      },
      {
        name: "art",
        type: "string",
        label: "Kunstfilter",
        component: "select",
        options: [
          {
            value: "no_art",
            label: "Kein Filter"
          },
          {
            value: "al_dente",
            label: "al_dente"
          },
          {
            value: "athena",
            label: "athena"
          },
          {
            value: "audrey",
            label: "audrey"
          },
          {
            value: "aurora",
            label: "aurora"
          },
          {
            value: "daguerre",
            label: "daguerre"
          },
          {
            value: "eucalyptus",
            label: "eucalyptus"
          },
          {
            value: "fes",
            label: "fes"
          },
          {
            value: "frost",
            label: "frost"
          },
          {
            value: "hairspray",
            label: "hairspray"
          },
          {
            value: "hokusai",
            label: "hokusai"
          },
          {
            value: "incognito",
            label: "incognito"
          },
          {
            value: "linen",
            label: "linen"
          },
          {
            value: "peacock",
            label: "peacock"
          },
          {
            value: "peacock",
            label: "peacock"
          },
          {
            value: "primavera",
            label: "primavera"
          },
          {
            value: "quartz",
            label: "quartz"
          },
          {
            value: "red_rock",
            label: "red_rock"
          },
          {
            value: "refresh",
            label: "refresh"
          },
          {
            value: "sizzle",
            label: "sizzle"
          },
          {
            value: "sonnet",
            label: "sonnet"
          },
          {
            value: "ukulele",
            label: "ukulele"
          },
          {
            value: "zorro",
            label: "zorro"
          }
        ]
      }
    ]
  }
];
var cloudinaryEffectOptionsDefaults = {
  effects: {
    autoColor: 0,
    autoContrast: 0,
    autoBrightness: 0,
    sharpen: 0,
    gamma: 0,
    redeye: false,
    grayscale: false,
    sepia: false,
    art: "no_art",
    improve: 0
  }
};

// tina/partials/fieldsets/cloudinary-generative.js
var cloudinaryGenerativeOptions = [
  {
    name: "generative",
    type: "object",
    label: "Generative AI Funktionen",
    description: "Es darf immer nur eine Generative funktion pro Bild aktiviert werden! Generative Funktionen kosten wesentlich mehr Credits und sollten mit bedacht verwendet werden.",
    fields: [
      {
        name: "genRemove",
        type: "object",
        label: "Generatives Entfernen",
        fields: [
          {
            name: "items",
            type: "string",
            label: "Objekte",
            description: "Welche Objekte sollen entfernt werden",
            list: true
          },
          {
            name: "multiple",
            type: "boolean",
            label: "Multiple Vorkommen",
            description: "Wenn mehrere Objekte definiert wurden ist diese Option automatisch aktiviert"
          },
          {
            name: "shadow",
            type: "boolean",
            label: "Entferne Schatten",
            description: "Soll auch der Schattenwurf der Objekte entfernt werden"
          },
          {
            name: "execute",
            type: "boolean",
            label: "Ausf\xFChren",
            description: "W\xE4hrend der Eingaben sollte die Ausf\xFChrung ausgeschaltet werden. Kosten: 50 Credits pro Ausf\xFChrung"
          }
        ]
      },
      {
        name: "genRecolor",
        type: "object",
        label: "Generatives Umf\xE4rben",
        fields: [
          {
            name: "items",
            type: "string",
            label: "Objekte",
            description: "Welche Objekte sollen umgef\xE4rbt werden?",
            list: true
          },
          {
            name: "to",
            type: "string",
            label: "Zu Farbe",
            description: "Zu welcher Farbe soll umgef\xE4rbt werden",
            list: false
          },
          {
            name: "multiple",
            type: "boolean",
            label: "Multiple Vorkommen",
            description: "Wenn mehrere Objekte definiert wurden ist diese Option automatisch aktiviert"
          },
          {
            name: "execute",
            type: "boolean",
            label: "Ausf\xFChren",
            description: "W\xE4hrend der Eingaben sollte die Ausf\xFChrung ausgeschaltet werden. Kosten: 50 Credits pro Ausf\xFChrung"
          }
        ]
      },
      {
        name: "genReplace",
        type: "object",
        label: "Generatives Ersetzen",
        fields: [
          {
            name: "from",
            type: "string",
            label: "Objekt",
            description: "Welches Objekt soll ersetzt werden?"
          },
          {
            name: "to",
            type: "string",
            label: "Ersatz",
            description: "Was soll statt dessen eingesetzt werden?",
            list: false
          },
          {
            name: "preserveGeometry",
            type: "boolean",
            label: "Geometrie erhalten",
            description: "Das neue Objekt wird exakt in die Geometrie des zu Ersetzenden Objektes eingef\xFCgt"
          },
          {
            name: "execute",
            type: "boolean",
            label: "Ausf\xFChren",
            description: "W\xE4hrend der Eingaben sollte die Ausf\xFChrung ausgeschaltet werden. Kosten: 120 Credits pro Ausf\xFChrung"
          }
        ]
      },
      {
        name: "genFill",
        type: "boolean",
        label: "Generative Bilderweiterung",
        description: "F\xFCllt generativ Bilder in ein anderes Format auf. Kosten: 50 Credits pro Derivat!"
      },
      {
        name: "genRestore",
        type: "boolean",
        label: "Generative Bildverbesserung",
        description: "Verbessert Details in qualitativ minderwertigen Bildern. Kosten: 100 Credits"
      }
    ]
  }
];
var cloudinaryGenerativeOptionsDefaults = {
  generative: {
    genRemove: {
      multiple: false,
      shadow: false,
      execute: false
    },
    genRecolor: {
      multiple: false,
      execute: false
    },
    genReplace: {
      preserveGeometry: false,
      execute: false
    },
    genFill: false,
    genRestore: false
  }
};

// tina/partials/fieldsets/options-adv-image-format.js
var advImageFormat = [
  {
    name: "priority",
    type: "boolean",
    label: "Bild mit Priorit\xE4t",
    description: "Schaltet das lazy-loading f\xFCr Bilder die im oberen Seitenbereich direkt angezeigt werden aus."
  },
  {
    name: "format",
    type: "object",
    label: "Format Einstellungen",
    fields: [
      {
        name: "fill",
        type: "boolean",
        label: "Bild einpassen",
        description: "Passt das Bild in das gew\xE4hlte Bildverh\xE4ltnis ein"
      },
      {
        name: "aspectRatio",
        type: "string",
        label: "Bildverh\xE4ltnis",
        component: "select",
        options: [
          {
            value: "1",
            label: "1/1"
          },
          {
            value: "3:2",
            label: "3/2"
          },
          {
            value: "2:3",
            label: "2/3"
          },
          {
            value: "4:3",
            label: "4/3"
          },
          {
            value: "4:5",
            label: "4/5"
          },
          {
            value: "5:4",
            label: "5/4"
          },
          {
            value: "16:9",
            label: "16/9"
          },
          {
            value: "21:9",
            label: "21/9"
          },
          {
            value: "3:1",
            label: "3/1"
          }
        ]
      },
      {
        name: "gravity",
        type: "string",
        label: "Beschnittfokus",
        component: "select",
        options: [
          {
            value: "auto",
            label: "Automatische Motiverkennung"
          },
          {
            value: "face:center",
            label: "Gr\xF6\xDFtes Gesicht"
          },
          {
            value: "faces",
            label: "Alle Gesichter"
          },
          {
            value: "center",
            label: "Mitte"
          },
          {
            value: "north_east",
            label: "Nord-Ost"
          },
          {
            value: "north",
            label: "Nord"
          },
          {
            value: "north_west",
            label: "Nord-West"
          },
          {
            value: "west",
            label: "West"
          },
          {
            value: "south_west",
            label: "S\xFCd-West"
          },
          {
            value: "south",
            label: "S\xFCden"
          },
          {
            value: "south_east",
            label: "S\xFCd-Ost"
          },
          {
            value: "east",
            label: "Ost"
          }
        ]
      }
    ]
  }
];
var advImageFormatDefaults = {
  priority: false,
  format: {
    fill: true,
    aspectRatio: "3:2",
    gravity: "auto"
  }
};

// tina/partials/fieldsets/image-fieldset-extended.js
var imageFieldsetExtended = [
  {
    name: "src",
    type: "image",
    label: "Bild Quelle",
    required: true
  },
  {
    name: "alt",
    type: "string",
    label: "Bild Alt Text",
    required: true,
    description: "Kurze Beschreibung was auf dem Bild zu sehen ist. Unterst\xFCtzt die Barrierefreiheit und SEO."
  },
  {
    name: "advancedImageOptions",
    type: "object",
    label: "Bild Einstellungen",
    fields: [...advImageFormat, ...cloudinaryEffectOptions]
  }
];
var imageFieldsetExtendedDefaults = {
  src: "/uploads/ts_tina_standard_image_16_9.jpg",
  alt: "Alt Text Bild",
  advancedImageOptions: {
    ...advImageFormatDefaults,
    ...cloudinaryEffectOptionsDefaults
  }
};
var imageFieldsetExtendedGen = [
  {
    name: "src",
    type: "image",
    label: "Bild Quelle",
    required: true
  },
  {
    name: "alt",
    type: "string",
    label: "Bild Alt Text",
    required: true,
    description: "Kurze Beschreibung was auf dem Bild zu sehen ist. Unterst\xFCtzt die Barrierefreiheit und SEO."
  },
  {
    name: "advancedImageOptions",
    type: "object",
    label: "Bild Einstellungen",
    fields: [
      ...advImageFormat,
      ...cloudinaryEffectOptions,
      ...cloudinaryGenerativeOptions
    ]
  }
];
var imageFieldsetExtendedGenDefaults = {
  src: "/uploads/ts_tina_standard_image_16_9.jpg",
  alt: "Alt Text Bild",
  advancedImageOptions: {
    ...advImageFormatDefaults,
    ...cloudinaryEffectOptionsDefaults,
    ...cloudinaryGenerativeOptionsDefaults
  }
};

// tina/templates/content-blocks/cards/image-text-card.js
var imageTextCardSchema = {
  name: "imageTextCard",
  label: "Bild / Text Card",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "introtext",
      type: "rich-text",
      label: "Text"
    },
    {
      name: "textCenter",
      type: "boolean",
      label: "Text zentriert"
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    {
      name: "backgroundColor",
      type: "string",
      label: "Hintergrundfarbe",
      ui: {
        component: BgColorPicker
      }
    },
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    ...imageFieldsetExtended,
    {
      name: "advancedCardOptions",
      type: "object",
      label: "Card Einstellungen",
      fields: [...advCardOptionsRendering]
    }
  ],
  ui: {
    previewSrc: "/blocks/cards/image-text-card.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textCenter: true,
        textColorSheme: "default",
        title: "Bild / Text Card",
        introtext: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              ]
            }
          ]
        },
        ...imageFieldsetExtendedDefaults,
        advancedCardOptions: {
          ...advCardOptionsRenderingDefaults
        }
      };
    }
  }
};
var image_text_card_default = imageTextCardSchema;

// tina/templates/content-blocks/cards/step-text-card.js
var stepTextCardSchema = {
  name: "stepTextCard",
  label: "Schritt / Text Card",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "stepNo",
      type: "string",
      label: "Nummer"
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "introtext",
      type: "rich-text",
      label: "Text"
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    {
      name: "backgroundColor",
      type: "string",
      label: "Hintergrundfarbe",
      ui: {
        component: BgColorPicker
      }
    },
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "advancedCardOptions",
      type: "object",
      label: "Card Einstellungen",
      fields: [
        ...advCardOptionsRendering,
        {
          name: "iconPosition",
          type: "string",
          label: "Icon Position",
          component: "select",
          options: [
            {
              value: "left",
              label: "Links"
            },
            {
              value: "top",
              label: "oben"
            }
          ]
        }
      ]
    }
  ],
  ui: {
    previewSrc: "/blocks/cards/step-text-card.png",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        title: "Schritt / Text Card",
        stepNo: "1.",
        introtext: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              ]
            }
          ]
        },
        advancedCardOptions: {
          ...advCardOptionsRenderingDefaults,
          iconPosition: "left",
          roundEdges: "tl-br"
        }
      };
    }
  }
};
var step_text_card_default = stepTextCardSchema;

// tina/partials/fieldsets/options-adv-row-rendering.js
var advRowRenderingOptions = [
  {
    name: "cardAlign",
    type: "string",
    label: "Item Anordnung",
    component: "select",
    options: [
      {
        value: "start",
        label: "Links nach Rechts"
      },
      {
        value: "center",
        label: "Mittig"
      },
      {
        value: "end",
        label: "Rechts nach Links"
      }
    ]
  },
  {
    name: "columnsMobile",
    type: "string",
    label: "Spalten Mobil",
    component: "select",
    options: [
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      }
    ]
  },
  {
    name: "columnsTablet",
    type: "string",
    label: "Spalten Tablet",
    component: "select",
    options: [
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      },
      {
        value: "4",
        label: "4"
      }
    ]
  },
  {
    name: "columnsDesktop",
    type: "string",
    label: "Spalten Desktop",
    component: "select",
    options: [
      {
        value: "1",
        label: "1"
      },
      {
        value: "2",
        label: "2"
      },
      {
        value: "3",
        label: "3"
      },
      {
        value: "4",
        label: "4"
      },
      {
        value: "6",
        label: "6"
      }
    ]
  },
  {
    name: "gap",
    type: "string",
    label: "Abstand",
    component: "select",
    options: [
      {
        value: "10",
        label: "10px"
      },
      {
        value: "20",
        label: "20px"
      },
      {
        value: "30",
        label: "30px"
      },
      {
        value: "40",
        label: "40px"
      },
      {
        value: "60",
        label: "60px"
      }
    ]
  },
  {
    name: "cssClass",
    type: "string",
    label: "CSS Klasse",
    ui: {
      format: (val) => val ? val.toLowerCase() : ""
    }
  }
];
var advRowRenderingOptionsDefaults = {
  cardAlign: "center",
  gap: "40",
  columnsMobile: "1",
  columnsTablet: "2",
  columnsDesktop: "3"
};

// tina/templates/content-blocks/card-list-block.js
var cardListBlockSchema = {
  name: "cardListBlock",
  label: "Card Liste",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "name",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "cards",
      type: "object",
      label: "Cards",
      list: true,
      ui: {
        visualSelector: true
      },
      templates: [image_text_card_default, icon_text_card_default, step_text_card_default]
    },
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [...advRowRenderingOptions]
    }
  ],
  ui: {
    previewSrc: "/blocks/card-list.jpg",
    itemProps: (item) => {
      return {
        label: item?.name
      };
    },
    defaultItem: (item) => {
      return {
        name: "Card Liste",
        ...blockOptionsPublishingDefaults,
        advancedBlockOptions: { ...advRowRenderingOptionsDefaults }
      };
    }
  }
};
var card_list_block_default = cardListBlockSchema;

// tina/partials/fieldsets/options-adv-block-rendering.js
var advBlockOptionsRendering = [
  {
    name: "wrapperTag",
    type: "string",
    label: "Wrapper Tag",
    component: "select",
    options: [
      {
        value: "article",
        label: "article"
      },
      {
        value: "aside",
        label: "aside"
      },
      {
        value: "div",
        label: "div"
      },
      {
        value: "section",
        label: "section"
      }
    ]
  },
  {
    name: "headerTag",
    type: "string",
    label: "Header / Titel Tag",
    component: "select",
    options: [
      {
        value: "h1",
        label: "h1"
      },
      {
        value: "h2",
        label: "h2"
      },
      {
        value: "h3",
        label: "h3"
      },
      {
        value: "h4",
        label: "h4"
      },
      {
        value: "h5",
        label: "h5"
      },
      {
        value: "h6",
        label: "h6"
      },
      {
        value: "span",
        label: "span"
      }
    ]
  },
  {
    name: "overrideTitleStyle",
    type: "string",
    label: "Header / Titel Stil \xFCberschreiben",
    component: "select",
    options: [
      {
        value: "false",
        label: "Nein"
      },
      {
        value: "h1",
        label: "Mit h1 Stil"
      },
      {
        value: "h2",
        label: "Mit h2 Stil"
      },
      {
        value: "h3",
        label: "Mit h3 Stil"
      },
      {
        value: "display",
        label: "Display"
      }
    ]
  }
];
var advBlockOptionsRenderingDefaults = {
  wrapperTag: "div",
  headerTag: "h2",
  overrideTitleStyle: "false"
};

// tina/templates/content-blocks/hero-text-image-block.js
var heroTextImageBlockSchema = {
  name: "heroTextImageBlock",
  label: "Hero",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "subtitle",
      type: "string",
      label: "Untertitel"
    },
    {
      name: "introtext",
      type: "string",
      label: "Text",
      ui: {
        component: "textarea"
      }
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    ...imageFieldsetExtended,
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [
        {
          name: "ordering",
          type: "string",
          label: "Reihenfolge",
          component: "select",
          options: [
            {
              value: "text-image",
              label: "Text - Bild"
            },
            {
              value: "image-text",
              label: "Bild - Text"
            }
          ]
        },
        {
          name: "textAlign",
          type: "string",
          label: "Text Ausrichtung",
          component: "select",
          options: [
            {
              value: "self-start",
              label: "Oben"
            },
            {
              value: "self-center",
              label: "Mitte"
            },
            {
              value: "self-end",
              label: "Unten"
            }
          ]
        },
        {
          name: "imageAlign",
          type: "string",
          label: "Bild Ausrichtung",
          component: "select",
          options: [
            {
              value: "self-start",
              label: "Oben"
            },
            {
              value: "self-center",
              label: "Mitte"
            },
            {
              value: "self-end",
              label: "Unten"
            }
          ]
        },
        ...advBlockOptionsRendering,
        {
          name: "subtitleTag",
          type: "string",
          label: "Untertitel Tag",
          component: "select",
          options: [
            {
              value: "h2",
              label: "h2"
            },
            {
              value: "h3",
              label: "h3"
            },
            {
              value: "h4",
              label: "h4"
            },
            {
              value: "h5",
              label: "h5"
            },
            {
              value: "h6",
              label: "h6"
            },
            {
              value: "span",
              label: "span"
            }
          ]
        },
        {
          name: "overrideSubTitleStyle",
          type: "string",
          label: "Header / Titel Stil \xFCberschreiben",
          component: "select",
          options: [
            {
              value: "false",
              label: "Nein"
            },
            {
              value: "h1",
              label: "Mit h1 Stil"
            },
            {
              value: "h2",
              label: "Mit h2 Stil"
            },
            {
              value: "h3",
              label: "Mit h3 Stil"
            },
            {
              value: "display",
              label: "Display"
            }
          ]
        }
      ]
    }
  ],
  ui: {
    previewSrc: "/blocks/hero-text-image-block.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        title: "Hero Block",
        introtext: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        ...imageFieldsetExtendedDefaults,
        advancedBlockOptions: {
          ordering: "text-image",
          textAlign: "self-center",
          imageAlign: "self-center",
          wrapperTag: "div",
          headerTag: "span",
          overrideTitleStyle: "h2",
          subtitleTag: "span",
          overrideSubTitleStyle: "h3"
        }
      };
    }
  }
};
var hero_text_image_block_default = heroTextImageBlockSchema;

// tina/templates/content-blocks/image-block.js
var imageBlockSchema = {
  name: "imageBlock",
  label: "Bild",
  fields: [...blockOptionsPublishing, ...imageFieldsetExtendedGen],
  ui: {
    previewSrc: "/blocks/image.jpg",
    itemProps: (item) => {
      return {
        label: item?.alt
      };
    },
    defaultItem: (item) => {
      return {
        ...blockOptionsPublishingDefaults,
        ...imageFieldsetExtendedGenDefaults
      };
    }
  }
};
var image_block_default = imageBlockSchema;

// tina/templates/content-blocks/intro-text-block.js
var introTextBlockSchema = {
  name: "introTextBlock",
  label: "Intro Text",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "subtitle",
      type: "string",
      label: "Untertitel"
    },
    {
      name: "introtext",
      type: "string",
      label: "Text",
      ui: {
        component: "textarea"
      }
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [
        ...advBlockOptionsRendering,
        {
          name: "subtitleTag",
          type: "string",
          label: "Untertitel Tag",
          component: "select",
          options: [
            {
              value: "h2",
              label: "h2"
            },
            {
              value: "h3",
              label: "h3"
            },
            {
              value: "h4",
              label: "h4"
            },
            {
              value: "h5",
              label: "h5"
            },
            {
              value: "h6",
              label: "h6"
            }
          ]
        },
        {
          name: "maxWidth",
          type: "string",
          label: "Introtext max. Breite",
          component: "select",
          options: [
            {
              value: "prose",
              label: "65 Zeichenbreiten"
            },
            {
              value: "3xl",
              label: "768px"
            },
            {
              value: "4xl",
              label: "896px"
            },
            {
              value: "5xl",
              label: "1024px"
            },
            {
              value: "6xl",
              label: "1152px"
            },
            {
              value: "7xl",
              label: "1280px"
            },
            {
              value: "max",
              label: "Maximale Breite"
            }
          ]
        }
      ]
    }
  ],
  ui: {
    previewSrc: "/blocks/intro-text-block.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        title: "Intro Text",
        introtext: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        advancedBlockOptions: {
          wrapperTag: "div",
          headerTag: "h2",
          overrideTitleStyle: "h1",
          subtitleTag: "h3",
          maxWidth: "prose"
        }
      };
    }
  }
};
var intro_text_block_default = introTextBlockSchema;

// tina/templates/content-blocks/sbs-image-text-block.js
var sbsImageTextBlockSchema = {
  name: "sbsImageTextBlock",
  label: "Side by Side - Bild / Text",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "subtitle",
      type: "string",
      label: "Untertitel"
    },
    {
      name: "text",
      type: "rich-text",
      label: "Text",
      isBody: true,
      templates: [button_default]
    },
    {
      name: "cta",
      type: "object",
      label: "Buttons / CTA",
      list: true,
      templates: [button_default]
    },
    ...imageFieldsetExtendedGen,
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [
        {
          name: "ordering",
          type: "string",
          label: "Reihenfolge",
          component: "select",
          options: [
            {
              value: "image-text",
              label: "Bild - Text"
            },
            {
              value: "text-image",
              label: "Text - Bild"
            }
          ]
        },
        {
          name: "centerTextMobile",
          type: "boolean",
          label: "Text Mobil zentrieren"
        },
        {
          name: "textAlign",
          type: "string",
          label: "Text Ausrichtung",
          description: "Ausrichtung des Textbereichs im Blockrahmen",
          component: "select",
          options: [
            {
              value: "self-start",
              label: "Oben"
            },
            {
              value: "self-center",
              label: "Mitte"
            },
            {
              value: "self-end",
              label: "Unten"
            }
          ]
        },
        {
          name: "imageAlign",
          type: "string",
          label: "Bild Ausrichtung",
          description: "Ausrichtung des Bildes im Blockrahmen",
          component: "select",
          options: [
            {
              value: "self-start",
              label: "Oben"
            },
            {
              value: "self-center",
              label: "Mitte"
            },
            {
              value: "self-end",
              label: "Unten"
            }
          ]
        },
        ...advBlockOptionsRendering,
        {
          name: "subtitleTag",
          type: "string",
          label: "Untertitel Tag",
          component: "select",
          options: [
            {
              value: "h2",
              label: "h2"
            },
            {
              value: "h3",
              label: "h3"
            },
            {
              value: "h4",
              label: "h4"
            },
            {
              value: "h5",
              label: "h5"
            },
            {
              value: "h6",
              label: "h6"
            }
          ]
        }
      ]
    }
  ],
  ui: {
    previewSrc: "/blocks/sbs-image-text-block.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        title: "Side by Side - Bild / Text",
        text: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              ]
            }
          ]
        },
        ...imageFieldsetExtendedGenDefaults,
        advancedBlockOptions: {
          ordering: "image-text",
          centerTextMobile: true,
          textAlign: "self-center",
          imageAlign: "self-center",
          ...advBlockOptionsRenderingDefaults,
          subtitleTag: "h3"
        }
      };
    }
  }
};
var sbs_image_text_block_default = sbsImageTextBlockSchema;

// tina/partials/fieldsets/options-embla-slider.js
import React8 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta7 } from "tinacms";
var emblaOptions = [
  {
    name: "emblaOptions",
    type: "object",
    label: "Slider Einstellungen",
    fields: [
      {
        name: "loop",
        type: "boolean",
        label: "Loop",
        description: "Sollen die Items endlos wiederholen?"
      },
      {
        name: "slidesToScroll",
        type: "string",
        label: "Anzahl weitergeschalteter Slides",
        description: "Wieviele Slides sollen auf eimnal weitergeschaltet werden.",
        component: "select",
        options: [
          {
            value: "1",
            label: "Ein Slide"
          },
          {
            value: "auto",
            label: "Anzahl angezeigter Slides"
          }
        ]
      },
      {
        name: "duration",
        type: "number",
        label: "Animationsdauer",
        description: "Slide Dauer bei Interaktionen (nicht Autoplay)",
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta7(({ field, input, meta }) => {
            return React8.createElement("div", null, React8.createElement(
              "input",
              {
                name: "duration",
                id: "duration",
                type: "range",
                min: "20",
                max: "60",
                step: "5",
                ...input
              }
            ), React8.createElement("br", null), "Ausgew\xE4hlte Dauer: ", input.value ? input.value : "0");
          })
        }
      },
      {
        name: "containScroll",
        type: "string",
        label: "containScroll",
        component: "select",
        options: [
          {
            value: "false",
            label: "false"
          },
          {
            value: "trimSnaps",
            label: "trimSnaps"
          },
          {
            value: "keepSnaps",
            label: "keepSnaps"
          }
        ]
      },
      {
        name: "dragFree",
        type: "boolean",
        label: "Freies Scrollen"
      },
      {
        name: "controls",
        type: "object",
        label: "Navigation",
        fields: [
          {
            name: "ctrlColorScheme",
            type: "string",
            label: "Navigation Farbsatz",
            required: true,
            ui: {
              component: ButtonColorShemePicker
            }
          },
          {
            name: "ctrlPrevNext",
            type: "boolean",
            label: "Vor/Zur\xFCck Buttons"
          },
          {
            name: "ctrlDotNav",
            type: "boolean",
            label: "Indikator Buttons"
          },
          {
            name: "ctrlStartStop",
            type: "boolean",
            label: "Start/Stop Buttons"
          },
          {
            name: "ctrlSizing",
            type: "string",
            label: "Button Gr\xF6\xDFen",
            component: "select",
            options: [
              {
                value: "small",
                label: "Klein"
              },
              {
                value: "medium",
                label: "Medium"
              },
              {
                value: "large",
                label: "Gro\xDF"
              }
            ]
          }
        ]
      },
      {
        name: "automation",
        type: "string",
        label: "Automation",
        component: "select",
        options: [
          {
            value: "false",
            label: "Keine Automatisierung"
          },
          {
            value: "autoplay",
            label: "Auto Play"
          },
          {
            value: "autoscroll",
            label: "Auto Scroll"
          }
        ]
      },
      {
        name: "autoplay",
        type: "object",
        label: "Auto Play Optionen",
        description: "Automatische Weiterschaltung",
        fields: [
          {
            name: "playOnInit",
            type: "boolean",
            label: "Bei Seiteninitialisierung starten"
          },
          {
            name: "delay",
            type: "number",
            label: "Geschwindigkeit",
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta7(({ field, input, meta }) => {
                return React8.createElement("div", null, React8.createElement(
                  "input",
                  {
                    name: "delay",
                    id: "delay",
                    type: "range",
                    min: "1000",
                    max: "10000",
                    step: "500",
                    ...input
                  }
                ), React8.createElement("br", null), "Geschwindigkeit: ", input.value ? input.value : "0", " ms");
              })
            }
          },
          {
            name: "stopOnInteraction",
            type: "boolean",
            label: "Bei Interaktion stoppen"
          },
          {
            name: "stopOnMouseEnter",
            type: "boolean",
            label: "Bei Mauseintritt stoppen"
          },
          {
            name: "stopOnFocusIn",
            type: "boolean",
            label: "Bei Focus stoppen"
          },
          {
            name: "stopOnLastSnap",
            type: "boolean",
            label: "Bei letztem Slide stoppen"
          }
        ]
      },
      {
        name: "autoscroll",
        type: "object",
        label: "Auto Scroll Optionen",
        description: "Automatisches Scrollen",
        fields: [
          {
            name: "playOnInit",
            type: "boolean",
            label: "Bei Seiteninitialisierung starten"
          },
          {
            name: "speed",
            type: "number",
            label: "Scroll Geschwindigkeit",
            description: "Scroll Geschwindigkeit in Pixeln pro Frame",
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta7(({ field, input, meta }) => {
                return React8.createElement("div", null, React8.createElement(
                  "input",
                  {
                    name: "speed",
                    id: "speed",
                    type: "range",
                    min: "1",
                    max: "10",
                    step: "1",
                    ...input
                  }
                ), React8.createElement("br", null), "Geschwindigkeit: ", input.value ? input.value : "0", " Px pro Frame");
              })
            }
          },
          {
            name: "startDelay",
            type: "number",
            label: "Start Verz\xF6gerung",
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta7(({ field, input, meta }) => {
                return React8.createElement("div", null, React8.createElement(
                  "input",
                  {
                    name: "startDelay",
                    id: "startDelay",
                    type: "range",
                    min: "100",
                    max: "10000",
                    step: "100",
                    ...input
                  }
                ), React8.createElement("br", null), "Start Verz\xF6gerung: ", input.value ? input.value : "0", " ms");
              })
            }
          },
          {
            name: "stopOnInteraction",
            type: "boolean",
            label: "Bei Interaktion stoppen"
          },
          {
            name: "stopOnMouseEnter",
            type: "boolean",
            label: "Bei Mauseintritt stoppen"
          },
          {
            name: "stopOnFocusIn",
            type: "boolean",
            label: "Bei Focus stoppen"
          }
        ]
      }
    ]
  }
];
var emblaOptionsDefaults = {
  emblaOptions: {
    loop: true,
    slidesToScroll: "1",
    duration: 25,
    containScroll: "trimSnaps",
    dragFree: false,
    controls: {
      ctrlColorScheme: "standard",
      ctrlPrevNext: true,
      ctrlDotNav: true,
      ctrlStartStop: true,
      ctrlSizing: "medium"
    },
    automation: "autoplay",
    autoplay: {
      playOnInit: true,
      delay: 4e3,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
      stopOnLastSnap: false
    },
    autoscroll: {
      playOnInit: true,
      speed: 2,
      startDelay: 1e3,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: true
    }
  }
};

// tina/templates/content-blocks/testimonial-carousel-block.js
var testimonialCarouselBlockSchema = {
  name: "testimonialCarouselBlock",
  label: "Testimonial Carousel",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "name",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "testimonials",
      type: "object",
      label: "Testimonials",
      list: true,
      fields: [
        {
          name: "title",
          type: "string",
          label: "Titel",
          required: true
        },
        {
          name: "testimonial",
          label: "Terstimonial",
          type: "reference",
          collections: ["testimonial"]
        }
      ],
      ui: {
        defaultItem: {
          title: "Testimonial"
        }
      },
      itemProps: (item) => {
        return {
          label: item?.title
        };
      }
    },
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [...advRowRenderingOptions, ...emblaOptions]
    }
  ],
  ui: {
    previewSrc: "/blocks/testimonial-carousel.jpg",
    itemProps: (item) => {
      return {
        label: item?.name
      };
    },
    defaultItem: (item) => {
      return {
        ...blockOptionsPublishingDefaults,
        name: "Testimonial Carousel",
        textColorSheme: "default",
        advancedBlockOptions: {
          cardAlign: "start",
          gap: "40",
          columnsMobile: "1",
          columnsTablet: "2",
          columnsDesktop: "2",
          ...emblaOptionsDefaults
        }
      };
    }
  }
};
var testimonial_carousel_block_default = testimonialCarouselBlockSchema;

// tina/templates/content-blocks/text-block.js
var textBlockSchema = {
  name: "textBlock",
  label: "Text Block",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "textColorSheme",
      type: "string",
      label: "Text Farbe",
      ui: {
        component: TextColorShemePicker
      }
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "text",
      type: "rich-text",
      label: "Text",
      isBody: true,
      templates: [button_default]
    },
    {
      name: "advancedBlockOptions",
      type: "object",
      label: "Block Einstellungen",
      fields: [...advBlockOptionsRendering]
    }
  ],
  ui: {
    previewSrc: "/blocks/rich-text.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.title : item?.title
      };
    },
    defaultItem: () => {
      return {
        title: "Text Block",
        text: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
              ]
            }
          ]
        },
        ...blockOptionsPublishingDefaults,
        textColorSheme: "default",
        advancedBlockOptions: {
          ...advBlockOptionsRenderingDefaults
        }
      };
    }
  }
};
var text_block_default = textBlockSchema;

// tina/templates/site-sections/full-width-section.js
var fullWidthSectionSchema = {
  name: "section",
  label: "Seitenabschnitt",
  fields: [
    ...blockOptionsPublishing,
    {
      name: "name",
      type: "string",
      label: "Bezeichnung des Seitenabschnitts",
      isTitle: true,
      required: true
    },
    {
      name: "backgroundColor",
      type: "string",
      label: "Hintergrundfarbe",
      ui: {
        component: BgColorPicker
      }
    },
    {
      name: "blocks",
      type: "object",
      label: "Inhalts Bl\xF6cke",
      description: "Allgemeines, Hero, Slider etc...",
      list: true,
      ui: {
        visualSelector: true
      },
      templates: [
        hero_text_image_block_default,
        intro_text_block_default,
        sbs_image_text_block_default,
        card_list_block_default,
        text_block_default,
        image_block_default,
        testimonial_carousel_block_default
      ]
    },
    {
      name: "advancedSectionOptions",
      type: "object",
      label: "Sektions Einstellungen",
      fields: [...advPageSectionOptions]
    }
  ],
  ui: {
    previewSrc: "/blocks/full-width-section.jpg",
    itemProps: (item) => {
      return {
        label: item?.draft ? "* " + item?.name : item?.name
      };
    },
    defaultItem: {
      ...blockOptionsPublishingDefaults,
      name: "Seitenabschnitt",
      advancedSectionOptions: { ...advPageSectionOptionsDefaults }
    }
  }
};
var full_width_section_default = fullWidthSectionSchema;

// tina/collections/page.js
var pageContent = {
  name: "page",
  label: "Seiten",
  path: "content/pages",
  format: "mdx",
  fields: [
    {
      name: "draft",
      type: "boolean",
      label: "Entwurf",
      required: true,
      description: "Wenn aktiviert wird die Seite nicht ver\xF6ffentlicht"
    },
    {
      name: "title",
      type: "string",
      label: "Titel",
      isTitle: true,
      required: true
    },
    {
      name: "main",
      type: "object",
      label: "Sektionen",
      list: true,
      ui: {
        visualSelector: true
      },
      templates: [full_width_section_default]
    },
    seo_options_default,
    social_sharing_options_default,
    {
      name: "createdAt",
      type: "string",
      label: "Erstellt",
      ui: {
        component: wrapFieldsWithMeta8(({ field, input, meta }) => {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
          };
          const date = new Date(input.value);
          return React9.createElement("div", null, React9.createElement("span", null, date.toLocaleDateString("de-DE", options), " - ", date.toLocaleTimeString("de-DE")));
        })
      }
    },
    {
      name: "lastModified",
      type: "string",
      label: "Zuletzt Bearbeitet",
      ui: {
        component: wrapFieldsWithMeta8(({ field, input, meta }) => {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
          };
          const date = new Date(input.value);
          return React9.createElement("div", null, React9.createElement("span", null, date.toLocaleDateString("de-DE", options), " - ", date.toLocaleTimeString("de-DE")));
        })
      }
    }
  ],
  ui: {
    defaultItem: {
      draft: false
    },
    filename: {
      showFirst: true,
      description: "Dateiname sowie SEO Slug der Seite",
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        const slug = values?.title ? slugify(values.title) : "";
        return `${slug}`;
      }
    },
    router: ({ document }) => {
      if (document._sys.filename === "home-page") {
        return `/`;
      } else {
        return `/${document._sys.breadcrumbs.join("/")}`;
      }
    },
    beforeSubmit: async ({ form, cms, values }) => {
      if (form.crudType === "create") {
        return {
          ...values,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          lastModified: (/* @__PURE__ */ new Date()).toISOString()
        };
      } else {
        return {
          ...values,
          lastModified: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    }
  }
};
var page_default = pageContent;

// tina/collections/testimonial.js
import slugify2 from "@sindresorhus/slugify";
import React10 from "react";
import { wrapFieldsWithMeta as wrapFieldsWithMeta9 } from "tinacms";
var testimonial = {
  name: "testimonial",
  label: "Testimonials",
  path: "content/testimonials",
  format: "mdx",
  fields: [
    {
      name: "draft",
      type: "boolean",
      label: "Entwurf",
      required: true,
      description: "Wenn aktiviert wird das Testimonial nicht ver\xF6ffentlicht"
    },
    {
      name: "name",
      type: "string",
      label: "Name / Quelle",
      isTitle: true,
      required: true
    },
    {
      name: "company",
      type: "string",
      label: "Unternehmen"
    },
    {
      name: "text",
      type: "string",
      label: "Text",
      isBody: true,
      ui: {
        component: "textarea"
      }
    },
    {
      name: "avatar",
      type: "image",
      label: "Bild / Avatar"
    },
    {
      name: "logo",
      type: "image",
      label: "Logo"
    },
    {
      name: "createdAt",
      type: "string",
      label: "Erstellt",
      ui: {
        component: wrapFieldsWithMeta9(({ field, input, meta }) => {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
          };
          const date = new Date(input.value);
          return React10.createElement("div", null, React10.createElement("span", null, date.toLocaleDateString("de-DE", options), " - ", date.toLocaleTimeString("de-DE")));
        })
      }
    },
    {
      name: "lastModified",
      type: "string",
      label: "Zuletzt Bearbeitet",
      ui: {
        component: wrapFieldsWithMeta9(({ field, input, meta }) => {
          const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
          };
          const date = new Date(input.value);
          return React10.createElement("div", null, React10.createElement("span", null, date.toLocaleDateString("de-DE", options), " - ", date.toLocaleTimeString("de-DE")));
        })
      }
    }
  ],
  ui: {
    defaultItem: {
      draft: false,
      name: "Max Mustermann",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        const slug = values?.name ? slugify2(values.name) : "";
        return `${slug}`;
      }
    },
    beforeSubmit: async ({ form, cms, values }) => {
      if (form.crudType === "create") {
        return {
          ...values,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          lastModified: (/* @__PURE__ */ new Date()).toISOString()
        };
      } else {
        return {
          ...values,
          lastModified: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    }
  }
};
var testimonial_default = testimonial;

// tina/config.js
var config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  process.env.HEAD,
  // Netlify branch env
  token: process.env.TINA_TOKEN,
  admin: {
    auth: {
      onLogin: async ({ token }) => {
        location.href = `/api/preview/enter?token=${token.id_token}&slug=${location.pathname}`;
      },
      onLogout: async () => {
        location.href = `/api/preview/exit?slug=${location.pathname}`;
      }
    }
  },
  media: {
    // If you wanted cloudinary do this
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
    // this is the config for the tina cloud media store
    // tina: {
    //   publicFolder: 'public',
    //   mediaRoot: 'uploads',
    // },
  },
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema: {
    collections: [global_settings_default2, navigation_default, page_default, testimonial_default]
  }
});
var config_default = config;
export {
  config,
  config_default as default
};
