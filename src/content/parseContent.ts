import {
  object,
  array,
  equals,
  oneOf,
  withDefault,
  parseString,
  optional,
  parseNumber,
  map,
  lazy,
  type Parser,
} from 'pure-parse'
import {
  type AssetContent,
  type RichTextContent,
  type BlockContent,
} from '../delivery-api'
import { parseRichTextContent } from './parseRichTextContent'
import { parseLinkContent } from './parseLinkContent'
import type {
  CardsContent,
  Content,
  HeroContent,
  PageContent,
  TestimonialContent,
  TestimonialsContent,
  UnknownContent,
  TabsContent,
  TabContent,
  CardContent,
  TeamMemberContent,
  TeamMembersContent,
  BackgroundColor,
  ButtonContent,
} from '.'

// Recursive parsers require lazy loading
export const parseContent: Parser<Content> = lazy(() =>
  oneOf(
    parsePageContent,
    parseTestimonialsContent,
    parseTestimonialContent,
    parseCardsContent,
    parseCardContent,
    parseHeroContent,
    parseTabsContent,
    parseTabContent,
    parseTeamMembersContent,
    parseTeamMemberContent,
    parseButtonContent,
  ),
)

const parseBackgroundColor = withDefault<BackgroundColor>(
  oneOf(
    equals('white'),
    equals('grey'),
    equals('beige'),
    equals('purple'),
    equals('orange'),
    equals('yellow'),
    equals('green'),
    equals('pink'),
    equals('blue'),
  ),
  'white',
)

const parseAssetContent = object<AssetContent>({
  fieldtype: equals('asset'),
  id: parseNumber,
  filename: parseString,
  title: optional(withDefault(parseString, undefined)),
  alt: optional(withDefault(parseString, undefined)),
  copyright: optional(withDefault(parseString, undefined)),
  focus: optional(withDefault(parseString, undefined)),
})

const parseBlockContent = object<BlockContent>({
  component: parseString,
  _uid: parseString,
  _editable: optional(parseString),
})

// Parse content
const parseUnknownContent = map(
  parseBlockContent,
  (block) =>
    ({
      ...block,
      component: 'unknown',
    }) as UnknownContent,
)

export const parseBlocks = array(
  oneOf(
    parseContent,
    // Fall back to "unknown" if any of the fields are invalid. This keeps the _uid
    parseUnknownContent,
  ),
)

export const parsePageContent = object<PageContent>({
  component: equals('page'),
  _uid: parseString,
  _editable: optional(parseString),
  body: withDefault(parseBlocks, []),
})

export const parseTestimonialContent = object<TestimonialContent>({
  component: equals('testimonial'),
  _uid: parseString,
  _editable: optional(parseString),
  quote: parseString,
  name: parseString,
  title: parseString,
  image: withDefault(parseAssetContent, undefined),
  imageBackgroundColor: parseBackgroundColor,
})

export const parseTestimonialsContent = object<TestimonialsContent>({
  component: equals('testimonials'),
  _uid: parseString,
  _editable: optional(parseString),
  title: parseString,
  description: parseString,
  testimonials: withDefault(parseBlocks, []),
})

export const parseCardContent = object<CardContent>({
  component: equals('card'),
  _uid: parseString,
  _editable: optional(parseString),
  description: parseRichTextContent,
  icon: withDefault(parseAssetContent, undefined),
})

export const parseCardsContent = object<CardsContent>({
  component: equals('cards'),
  _uid: parseString,
  _editable: optional(parseString),
  description: parseRichTextContent,
  cards: array(parseCardContent),
})

export const parseHeroContent = object<HeroContent>({
  component: equals('hero'),
  _uid: parseString,
  _editable: optional(parseString),
  image: withDefault(parseAssetContent, undefined),
  textAlignment: withDefault(
    oneOf(equals('left'), equals('right'), equals('center')),
    'left',
  ),
  imagePadding: withDefault(equals(true), false),
  description: withDefault(parseRichTextContent, {
    type: 'doc',
    content: [],
  } as RichTextContent),
  backgroundColor: parseBackgroundColor,
  buttons: withDefault(array(lazy(() => parseButtonContent)), []),
})

export const parseTabContent = object<TabContent>({
  component: equals('tab'),
  _uid: parseString,
  _editable: optional(parseString),
  title: parseString,
  content: withDefault(parseBlocks, [] as Content[]),
})

export const parseTabsContent = object<TabsContent>({
  component: equals('tabs'),
  _uid: parseString,
  _editable: optional(parseString),
  tabs: array(parseTabContent),
  description: withDefault(parseRichTextContent, {
    type: 'doc',
    content: [],
  } as RichTextContent),
})

export const parseTeamMemberContent = object<TeamMemberContent>({
  component: equals('teamMember'),
  _uid: parseString,
  _editable: optional(parseString),
  name: parseString,
  title: parseString,
  image: withDefault(parseAssetContent, undefined),
  backgroundColor: parseBackgroundColor,
})

export const parseTeamMembersContent = object<TeamMembersContent>({
  component: equals('teamMembers'),
  _uid: parseString,
  _editable: optional(parseString),
  description: parseRichTextContent,
  teamMembers: withDefault(
    array(
      object({
        uuid: parseString,
        content: parseTeamMemberContent,
      }),
    ),
    [],
  ),
})

export const parseButtonContent = object<ButtonContent>({
  component: equals('button'),
  _uid: parseString,
  _editable: optional(parseString),
  text: parseString,
  link: withDefault(parseLinkContent, undefined),
  color: withDefault(oneOf(equals('primary'), equals('secondary')), 'primary'),
})
