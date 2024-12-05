export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const GlobalSettingsPartsFragmentDoc = gql`
    fragment GlobalSettingsParts on GlobalSettings {
  __typename
  siteInformation {
    __typename
    siteName
    siteUrl
    logo
    contactData {
      __typename
      street
      streetNo
      postalCode
      city
      email {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      phone {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      mobile {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      fax
    }
    socialLinks {
      __typename
      iconStyle
      facebook {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      x {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      threads {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      instagram {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      youtube {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      linkedIn {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
      xing {
        __typename
        linkText
        linkHref
        linkType
        linkTarget
      }
    }
  }
  SlideInMenu {
    __typename
    position
  }
  globalSeo {
    __typename
    metaDescription
    metaKeywords {
      __typename
      metaKeywordList
    }
    robots {
      __typename
      index
      follow
      imageindex
    }
  }
  globalLayout {
    __typename
    primaryColor
    secondaryColor
    additionalColors {
      __typename
      colorName
      colorValue
    }
    headingColor
    bodyColor
    advancedBackgrounds {
      __typename
      advancedBackgroundName
      advancedBackgroundLayers {
        __typename
        ... on GlobalSettingsGlobalLayoutAdvancedBackgroundsAdvancedBackgroundLayersColorLayerTemplate {
          colorLayer
        }
        ... on GlobalSettingsGlobalLayoutAdvancedBackgroundsAdvancedBackgroundLayersImageLayerTemplate {
          image
          bgPos
          bgPosStr
          bgRep
        }
      }
    }
    textStyleSets {
      __typename
      name
      headingColor
      bodyColor
    }
    buttonStyleSets {
      __typename
      name
      backgroundColor
      backgroundColorHover
      borderColor
      borderColorHover
      borderWidth
      textColor
      textColorHover
    }
    twSafeList {
      __typename
      safeListClasses
    }
  }
  mailConfiguration {
    __typename
    logo
    contactRecipients
    senderName
    senderAddress
    replyAddress
  }
  legalTexts {
    __typename
    imprint {
      __typename
      imprintFetch
      imprintAdditionalText
    }
    privacyPolicy {
      __typename
      privacyPolicyFetch
      privacyPolicyAdditionalText
    }
  }
  siteFooter {
    __typename
    logo
  }
}
    `;
export const GlobalSettingsFragmentFragmentDoc = gql`
    fragment GlobalSettingsFragment on Query {
  globalSettings(relativePath: "global-settings.json") {
    ...GlobalSettingsParts
  }
}
    ${GlobalSettingsPartsFragmentDoc}`;
export const NavigationPartsFragmentDoc = gql`
    fragment NavigationParts on Navigation {
  __typename
  title
  menu {
    __typename
    linkText
    linkHref
    linkType
    linkTarget
    submenu {
      __typename
      linkText
      linkHref
      linkType
      linkTarget
    }
  }
}
    `;
export const MainMenuDataFragmentFragmentDoc = gql`
    fragment MainMenuDataFragment on Query {
  siteHeaderNav: navigation(relativePath: "main-menu.json") {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavigationParts
  }
}
    ${NavigationPartsFragmentDoc}`;
export const FooterMenuDataFragmentFragmentDoc = gql`
    fragment FooterMenuDataFragment on Query {
  siteFooterNav: navigation(relativePath: "footer-menu.json") {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavigationParts
  }
}
    ${NavigationPartsFragmentDoc}`;
export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  draft
  title
  main {
    __typename
    ... on PageMainSection {
      draft
      name
      backgroundColor
      blocks {
        __typename
        ... on PageMainSectionBlocksHeroTextImageBlock {
          draft
          textColorSheme
          title
          subtitle
          introtext
          cta {
            __typename
            ... on PageMainSectionBlocksHeroTextImageBlockCtaButton {
              linkText
              linkHref
              linkType
              linkTarget
              faIcon
              colorScheme
              size
            }
          }
          src
          alt
          advancedImageOptions {
            __typename
            priority
            format {
              __typename
              fill
              aspectRatio
              gravity
            }
            effects {
              __typename
              autoColor
              autoContrast
              autoBrightness
              improve
              sharpen
              gamma
              redeye
              grayscale
              sepia
              art
            }
          }
          advancedBlockOptions {
            __typename
            ordering
            textAlign
            imageAlign
            wrapperTag
            headerTag
            overrideTitleStyle
            subtitleTag
            overrideSubTitleStyle
          }
        }
        ... on PageMainSectionBlocksIntroTextBlock {
          draft
          textColorSheme
          title
          subtitle
          introtext
          cta {
            __typename
            ... on PageMainSectionBlocksIntroTextBlockCtaButton {
              linkText
              linkHref
              linkType
              linkTarget
              faIcon
              colorScheme
              size
            }
          }
          advancedBlockOptions {
            __typename
            wrapperTag
            headerTag
            overrideTitleStyle
            subtitleTag
            maxWidth
          }
        }
        ... on PageMainSectionBlocksSbsImageTextBlock {
          draft
          textColorSheme
          title
          subtitle
          text
          cta {
            __typename
            ... on PageMainSectionBlocksSbsImageTextBlockCtaButton {
              linkText
              linkHref
              linkType
              linkTarget
              faIcon
              colorScheme
              size
            }
          }
          src
          alt
          advancedImageOptions {
            __typename
            priority
            format {
              __typename
              fill
              aspectRatio
              gravity
            }
            effects {
              __typename
              autoColor
              autoContrast
              autoBrightness
              improve
              sharpen
              gamma
              redeye
              grayscale
              sepia
              art
            }
            generative {
              __typename
              genRemove {
                __typename
                items
                multiple
                shadow
                execute
              }
              genRecolor {
                __typename
                items
                to
                multiple
                execute
              }
              genReplace {
                __typename
                from
                to
                preserveGeometry
                execute
              }
              genFill
              genRestore
            }
          }
          advancedBlockOptions {
            __typename
            ordering
            centerTextMobile
            textAlign
            imageAlign
            wrapperTag
            headerTag
            overrideTitleStyle
            subtitleTag
          }
        }
        ... on PageMainSectionBlocksCardListBlock {
          draft
          name
          cards {
            __typename
            ... on PageMainSectionBlocksCardListBlockCardsImageTextCard {
              draft
              title
              introtext
              textCenter
              cta {
                __typename
                ... on PageMainSectionBlocksCardListBlockCardsImageTextCardCtaButton {
                  linkText
                  linkHref
                  linkType
                  linkTarget
                  faIcon
                  colorScheme
                  size
                }
              }
              backgroundColor
              textColorSheme
              src
              alt
              advancedImageOptions {
                __typename
                priority
                format {
                  __typename
                  fill
                  aspectRatio
                  gravity
                }
                effects {
                  __typename
                  autoColor
                  autoContrast
                  autoBrightness
                  improve
                  sharpen
                  gamma
                  redeye
                  grayscale
                  sepia
                  art
                }
              }
              advancedCardOptions {
                __typename
                headerTag
                wrapperTag
                cssClass
              }
            }
            ... on PageMainSectionBlocksCardListBlockCardsIconTextCard {
              draft
              faIcon
              title
              introtext
              cta {
                __typename
                ... on PageMainSectionBlocksCardListBlockCardsIconTextCardCtaButton {
                  linkText
                  linkHref
                  linkType
                  linkTarget
                  faIcon
                  colorScheme
                  size
                }
              }
              backgroundColor
              textColorSheme
              advancedCardOptions {
                __typename
                headerTag
                wrapperTag
                cssClass
                iconPosition
              }
            }
            ... on PageMainSectionBlocksCardListBlockCardsStepTextCard {
              draft
              stepNo
              title
              introtext
              cta {
                __typename
                ... on PageMainSectionBlocksCardListBlockCardsStepTextCardCtaButton {
                  linkText
                  linkHref
                  linkType
                  linkTarget
                  faIcon
                  colorScheme
                  size
                }
              }
              backgroundColor
              textColorSheme
              advancedCardOptions {
                __typename
                headerTag
                wrapperTag
                cssClass
                iconPosition
              }
            }
          }
          advancedBlockOptions {
            __typename
            cardAlign
            columnsMobile
            columnsTablet
            columnsDesktop
            gap
            cssClass
          }
        }
        ... on PageMainSectionBlocksTextBlock {
          draft
          textColorSheme
          title
          text
          advancedBlockOptions {
            __typename
            wrapperTag
            headerTag
            overrideTitleStyle
          }
        }
        ... on PageMainSectionBlocksImageBlock {
          draft
          src
          alt
          advancedImageOptions {
            __typename
            priority
            format {
              __typename
              fill
              aspectRatio
              gravity
            }
            effects {
              __typename
              autoColor
              autoContrast
              autoBrightness
              improve
              sharpen
              gamma
              redeye
              grayscale
              sepia
              art
            }
            generative {
              __typename
              genRemove {
                __typename
                items
                multiple
                shadow
                execute
              }
              genRecolor {
                __typename
                items
                to
                multiple
                execute
              }
              genReplace {
                __typename
                from
                to
                preserveGeometry
                execute
              }
              genFill
              genRestore
            }
          }
        }
        ... on PageMainSectionBlocksTestimonialCarouselBlock {
          draft
          name
          textColorSheme
          testimonials {
            __typename
            title
            testimonial {
              ... on Testimonial {
                __typename
                draft
                name
                company
                text
                avatar
                logo
                createdAt
                lastModified
              }
              ... on Document {
                _sys {
                  filename
                  basename
                  hasReferences
                  breadcrumbs
                  path
                  relativePath
                  extension
                }
                id
              }
            }
          }
          advancedBlockOptions {
            __typename
            cardAlign
            columnsMobile
            columnsTablet
            columnsDesktop
            gap
            cssClass
            emblaOptions {
              __typename
              loop
              slidesToScroll
              duration
              containScroll
              dragFree
              controls {
                __typename
                ctrlColorScheme
                ctrlPrevNext
                ctrlDotNav
                ctrlStartStop
                ctrlSizing
              }
              automation
              autoplay {
                __typename
                playOnInit
                delay
                stopOnInteraction
                stopOnMouseEnter
                stopOnFocusIn
                stopOnLastSnap
              }
              autoscroll {
                __typename
                playOnInit
                speed
                startDelay
                stopOnInteraction
                stopOnMouseEnter
                stopOnFocusIn
              }
            }
          }
        }
      }
      advancedSectionOptions {
        __typename
        sizing
        wrapperTag
        paddings {
          __typename
          paddingTop
          paddingTopMobile
          paddingBottom
          paddingBottomMobile
          paddingBlocks
          paddingBlocksMobile
        }
        cssClass
        cssId
      }
    }
  }
  seo {
    __typename
    metaTitle
    metaDescription
    metaKeywords {
      __typename
      metaKeywordList
    }
  }
  socialSharingOptions {
    __typename
    title
    description
    image
  }
  createdAt
  lastModified
}
    `;
export const TestimonialPartsFragmentDoc = gql`
    fragment TestimonialParts on Testimonial {
  __typename
  draft
  name
  company
  text
  avatar
  logo
  createdAt
  lastModified
}
    `;
export const GlobalDataDocument = gql`
    query globalData {
  ...GlobalSettingsFragment
}
    ${GlobalSettingsFragmentFragmentDoc}`;
export const SiteHeaderDataDocument = gql`
    query siteHeaderData {
  ...MainMenuDataFragment
  ...GlobalSettingsFragment
}
    ${MainMenuDataFragmentFragmentDoc}
${GlobalSettingsFragmentFragmentDoc}`;
export const SiteFooterDataDocument = gql`
    query siteFooterData {
  ...FooterMenuDataFragment
  ...GlobalSettingsFragment
}
    ${FooterMenuDataFragmentFragmentDoc}
${GlobalSettingsFragmentFragmentDoc}`;
export const PageDataDocument = gql`
    query pageData($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const SitemapDataDocument = gql`
    query sitemapData {
  globalSettings(relativePath: "global-settings.json") {
    siteInformation {
      siteUrl
    }
  }
  pageConnection(filter: {draft: {eq: false}}) {
    edges {
      node {
        title
        id
        lastModified
        _sys {
          filename
          breadcrumbs
        }
      }
    }
  }
}
    `;
export const GlobalSettingsDocument = gql`
    query globalSettings($relativePath: String!) {
  globalSettings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalSettingsParts
  }
}
    ${GlobalSettingsPartsFragmentDoc}`;
export const GlobalSettingsConnectionDocument = gql`
    query globalSettingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalSettingsFilter) {
  globalSettingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalSettingsParts
      }
    }
  }
}
    ${GlobalSettingsPartsFragmentDoc}`;
export const NavigationDocument = gql`
    query navigation($relativePath: String!) {
  navigation(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavigationParts
  }
}
    ${NavigationPartsFragmentDoc}`;
export const NavigationConnectionDocument = gql`
    query navigationConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavigationFilter) {
  navigationConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NavigationParts
      }
    }
  }
}
    ${NavigationPartsFragmentDoc}`;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const TestimonialDocument = gql`
    query testimonial($relativePath: String!) {
  testimonial(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TestimonialParts
  }
}
    ${TestimonialPartsFragmentDoc}`;
export const TestimonialConnectionDocument = gql`
    query testimonialConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TestimonialFilter) {
  testimonialConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TestimonialParts
      }
    }
  }
}
    ${TestimonialPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    globalData(variables, options) {
      return requester(GlobalDataDocument, variables, options);
    },
    siteHeaderData(variables, options) {
      return requester(SiteHeaderDataDocument, variables, options);
    },
    siteFooterData(variables, options) {
      return requester(SiteFooterDataDocument, variables, options);
    },
    pageData(variables, options) {
      return requester(PageDataDocument, variables, options);
    },
    sitemapData(variables, options) {
      return requester(SitemapDataDocument, variables, options);
    },
    globalSettings(variables, options) {
      return requester(GlobalSettingsDocument, variables, options);
    },
    globalSettingsConnection(variables, options) {
      return requester(GlobalSettingsConnectionDocument, variables, options);
    },
    navigation(variables, options) {
      return requester(NavigationDocument, variables, options);
    },
    navigationConnection(variables, options) {
      return requester(NavigationConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    },
    testimonial(variables, options) {
      return requester(TestimonialDocument, variables, options);
    },
    testimonialConnection(variables, options) {
      return requester(TestimonialConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
