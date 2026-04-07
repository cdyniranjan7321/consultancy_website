const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-xl font-bold text-primary">
        Apex<span className="text-foreground">Consul</span>
      </p>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} ApexConsul. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
