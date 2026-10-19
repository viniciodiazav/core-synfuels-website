export type Locale = "en" | "es";

export interface Dictionary {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    services: string;
    divisions: string;
    howWeWork: string;
    library: string;
    values: string;
    contact: string;
    ctaButton: string;
    langSelect: string;
  };
  hero: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: {
      businessStrength: string;
      engineering: string;
      evolution: string;
      globalReach: string;
    };
    previewCard: {
      tag: string;
      title: string;
      description: string;
      points: string[];
      bannerTitle: string;
      bannerSubtitle: string;
      ctaText: string;
    };
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    purpose: {
      number: string;
      title: string;
      description: string;
    };
    mission: {
      number: string;
      title: string;
      description: string;
    };
    vision: {
      number: string;
      title: string;
      description: string;
    };
    geography: {
      tag: string;
      title: string;
      description: string;
      texasLabel: string;
      texasDetail: string;
      mexicoLabel: string;
      mexicoDetail: string;
      corridorLabel: string;
      disclaimer: string;
    };
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    items: {
      id: string;
      number: string;
      title: string;
      shortDesc: string;
      description: string;
      deliverables: string[];
      icon: string;
      cta: string;
    }[];
  };
  divisions: {
    tag: string;
    title: string;
    subtitle: string;
    modalClose: string;
    transversalBadge: string;
    items: {
      id: string;
      number: string;
      name: string;
      tagline: string;
      description: string;
      icon: string;
      bullets: string[];
      actionText: string;
      detailKeyAreas: string[];
    }[];
    transversal: {
      number: string;
      name: string;
      tagline: string;
      description: string;
      bullets: string[];
      actionText: string;
    };
  };
  howWeWork: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      icon: string;
      description: string;
      outputs: string;
    }[];
  };
  library: {
    tag: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    items: {
      id: string;
      division: string;
      title: string;
      description: string;
      focus: string[];
      badge: string;
    }[];
  };
  values: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      countryLabel: string;
      countryOptions: { value: string; label: string }[];
      industryLabel: string;
      industryOptions: { value: string; label: string }[];
      serviceLabel: string;
      serviceOptions: { value: string; label: string }[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successDesc: string;
      resetBtn: string;
    };
    info: {
      locationTitle: string;
      texasTitle: string;
      texasDesc: string;
      mexicoTitle: string;
      mexicoDesc: string;
      emailTitle: string;
      emailValue: string;
      hoursTitle: string;
      hoursValue: string;
      commitmentTitle: string;
      commitmentDesc: string;
    };
  };
  footer: {
    tagline: string;
    scopeNotice: string;
    copyright: string;
    navTitle: string;
    servicesTitle: string;
    industriesTitle: string;
    contactTitle: string;
  };
}
